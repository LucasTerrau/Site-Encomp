import React from "react";
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
  cpf: z.string().regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/u, { message: "CPF deve estar no formato 000.000.000-00" }),
  nome: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Email inválido." }),
  endereco: z.string().min(3, { message: "Endereço deve ter pelo menos 3 caracteres." }),
  periodo: z.string().min(1, { message: "Selecione o período." }),
  telefone: z.string().refine((v) => {
    const d = v.replace(/\D/g, "");
    return d.length >= 10 && d.length <= 11;
  }, { message: "Telefone deve ter 10 ou 11 dígitos (com DDD)." }),
});

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/u/3/d/e/1FAIpQLSd0_PCOx5EgFOYqu7QRDIWlR8b87YnNJmawhxLOFIFemQiDYw/formResponse";

const FORM_ENTRY_IDS = {
  cpf: "entry.891552767",
  nome: "entry.950192036",
  email: "entry.512518463",
  endereco: "entry.371273980",
  periodo: "entry.729292152",
  telefone: "entry.123456789",
};

const FormRegistro: React.FC = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: "",
      nome: "",
      email: "",
      endereco: "",
      periodo: "",
      telefone: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 11) value = value.slice(0, 11);
    if (value.length > 0) value = value.replace(/^(\d{3})(\d)/, "$1.$2");
    if (value.length > 3) value = value.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    if (value.length > 6) value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
    form.setValue("cpf", value);
  };

  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let d = e.target.value.replace(/\D/g, "");
    if (d.length > 11) d = d.slice(0, 11);

    let formatted = d;
    if (d.length <= 2) {
      formatted = d;
    } else if (d.length <= 6) {
      formatted = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    } else if (d.length <= 10) {
      formatted = `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    } else {
      formatted = `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
    }

    form.setValue("telefone", formatted);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const formData = new FormData();
    formData.append(FORM_ENTRY_IDS.nome, values.nome);
    formData.append(FORM_ENTRY_IDS.email, values.email);
    formData.append(FORM_ENTRY_IDS.cpf, values.cpf);
    formData.append(FORM_ENTRY_IDS.endereco, values.endereco);
    formData.append(FORM_ENTRY_IDS.periodo, values.periodo);
    formData.append(FORM_ENTRY_IDS.telefone, values.telefone);

    try {
      await fetch(GOOGLE_FORM_URL, {
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
                name="cpf"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-encomp-green">CPF</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="000.000.000-00"
                        {...field}
                        onChange={handleCpfChange}
                        className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="nome"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-encomp-green">Nome</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Seu nome completo"
                        {...field}
                        className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green"
                      />
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
                    <FormLabel className="text-encomp-green">E-mail</FormLabel>
                    <FormControl>
                      <Input
                        type="email"
                        placeholder="seu.email@exemplo.com"
                        {...field}
                        className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green"
                      />
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
                      <Textarea
                        placeholder="Seu endereço completo"
                        {...field}
                        className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="periodo"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-encomp-green">Período</FormLabel>
                    <FormControl>
                      <select
                        className="w-full h-10 rounded-md border border-encomp-green/30 bg-encomp-dark px-3 py-2 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                        {...field}
                      >
                        <option value="">Selecione o período</option>
                        <option value="1° Ano">1° Ano</option>
                        <option value="2° Ano">2° Ano</option>
                        <option value="3° Ano">3° Ano</option>
                        <option value="1° período">1° período</option>
                        <option value="2° período">2° período</option>
                        <option value="3° período">3° período</option>
                        <option value="4° período">4° período</option>
                        <option value="5° período">5° período</option>
                        <option value="6° período">6° período</option>
                        <option value="7° período">7° período</option>
                        <option value="8° período">8° período</option>
                        <option value="N/A">N/A</option>
                      </select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="telefone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-encomp-green">Telefone</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="(99) 99999-9999"
                        {...field}
                        onChange={handleTelefoneChange}
                        className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={isSubmitting} className="w-full bg-encomp-green text-black font-bold gap-2">
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
