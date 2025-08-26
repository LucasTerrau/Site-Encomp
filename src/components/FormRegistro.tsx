import React, { useEffect, useState } from 'react';
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { SendIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  nome: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Email inválido." }),
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, { message: "CPF deve estar no formato 000.000.000-00" }),
  endereco: z.string().min(5, { message: "Endereço deve ter pelo menos 5 caracteres." }),
  curso: z.string().min(1, { message: "Selecione um curso." }),
});

const FormRegistro = () => {
  const { toast } = useToast();
  const [vagas, setVagas] = useState<{ [curso: string]: number }>({});
  const [loadingVagas, setLoadingVagas] = useState(true);

  useEffect(() => {
    const SHEET_DOC_ID = "1GlVcP6QJtvS_RGwztxn_-Q0eyjzMbPA6pkX_b1jOQjY";
    const SHEET_NAME = "Planilha Bongas";

    const url =
      `https://docs.google.com/spreadsheets/d/${SHEET_DOC_ID}/gviz/tq` +
      `?tq=${encodeURIComponent("select A,B")}` +
      `&tqx=out:csv` +
      `&sheet=${encodeURIComponent(SHEET_NAME)}` +
      `&_=${Date.now()}`; 
    fetch(url)
      .then(res => res.text())
      .then(text => {
        const clean = text.replace(/^\uFEFF/, "").replace(/\r/g, "").trim();

        if (/<(html|head|style|body)/i.test(clean)) {
          setVagas({});
          return;
        }

        const sep = clean.split("\n")[0].includes(";") ? ";" : ",";

        const linhas = clean
          .split("\n")
          .map(l => l.split(sep).map(c => c.replace(/^"+|"+$/g, "").trim()))
          .filter(arr => arr.length >= 2 && (arr[0] ?? "").length > 0);

        const data = linhas.slice(1);

        const obj: { [curso: string]: number } = {};
        for (const cols of data) {
          const curso = cols[0];
          const qtd = Number.parseInt((cols[1] || "0").replace(/[^\d-]/g, ""), 10);
          if (curso) obj[curso] = Number.isFinite(qtd) ? qtd : 0;
        }

        setVagas(obj);
      })
      .catch(() => setVagas({}))
      .finally(() => setLoadingVagas(false));
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nome: "",
      email: "",
      cpf: "",
      endereco: "",
      curso: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const googleFormURL = `https://docs.google.com/forms/u/3/d/e/1FAIpQLSd0_PCOx5EgFOYqu7QRDIWlR8b87YnNJmawhxLOFIFemQiDYw/formResponse`;

    const formData = new FormData();
    formData.append("entry.950192036", values.nome);
    formData.append("entry.512518463", values.email);
    formData.append("entry.891552767", values.cpf);
    formData.append("entry.371273980", values.endereco);
    formData.append("entry.729292152", values.curso);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        mode: "no-cors",
        body: formData,
      });

      toast({
        title: "Pré-inscrição enviada com sucesso!",
        description: "Em breve enviaremos um email com mais informações sobre a inscrição final.",
      });

      form.reset();
    } catch (error) {
      toast({
        title: "Erro ao enviar.",
        description: "Por favor, tente novamente.",
        variant: "destructive",
      });
    }
  };

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 0) value = value.replace(/^(\d{3})(\d)/, '$1.$2');
    if (value.length > 3) value = value.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    if (value.length > 6) value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, '$1.$2.$3-$4');
    form.setValue('cpf', value);
  };

  return (
    <section id="inscricao" className="py-16 bg-encomp-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-encomp-green">&lt;</span>
          Pré-inscrição
          <span className="text-encomp-green">/&gt;</span>
        </h2>

        <div className="max-w-2xl mx-auto bg-encomp-black p-8 rounded-xl border border-encomp-green/20 hover:border-encomp-green/40 shadow-xl">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-encomp-green">Nome Completo</FormLabel>
                    <FormControl>
                      <Input placeholder="Seu nome completo" {...field} className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-encomp-green">Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="seu.email@exemplo.com" {...field} className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-encomp-green">CPF</FormLabel>
                    <FormControl>
                      <Input placeholder="000.000.000-00" {...field} onChange={handleCpfChange} className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endereco"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-encomp-green">Endereço</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Seu endereço completo" {...field} className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="curso"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-encomp-green">Curso/Área de Interesse</FormLabel>
                    <FormControl>
                      <select
                        className="w-full h-10 rounded-md border border-encomp-green/30 bg-encomp-dark px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        {...field}
                      >
                        <option value="">
                          {loadingVagas ? "Carregando cursos..." : "Selecione um curso"}
                        </option>
                        {!loadingVagas && Object.keys(vagas).length === 0 && (
                          <option disabled value="">Não foi possível carregar as vagas</option>
                        )}
                        {Object.entries(vagas).map(([curso, qtd]) => (
                          <option key={curso} value={curso} disabled={qtd <= 0}>
                            {curso} {qtd > 0 ? `(${qtd} vagas)` : `(Esgotado)`}
                          </option>
                        ))}
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full bg-encomp-green text-black font-bold">
                {isSubmitting ? "Enviando..." : (
                  <>
                    <SendIcon size={18} />
                    Enviar Pré-inscrição
                  </>
                )}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormRegistro;
