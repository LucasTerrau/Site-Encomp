import React, { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form, FormControl, FormField, FormItem, FormLabel, FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { SendIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const CURSOS = [
  "Linux aplicado à prática de programação",
  "Docker",
  ".NET e Angular",
  "Workshop de LangChain",
  "Cloud Computing",
  "Edição de Vídeo com DaVinci Resolve",
  "Informática Básica",
  "Criação de Chatbots com Python",
  "Computação Forense",
  "Introdução a Deep Learning em Python",
  "Inglês voltado para a Computação",
  "Introdução ao JavaScript",
  "Blender para iniciantes (Presencial)",
  "Blender para iniciantes (Online)",
  "Montagem e Funcionamento de Computadores",
  "React",
  "HTML e CSS",
  "Introdução à Computação em Nuvem",
  "Introdução ao React Native",
  "Virtualização e Introdução ao Kali Linux com foco em Pentest",
  "Visualização de Dados em Power BI",
  "Campeonato de Jogos",
  "Como adquirir um computador",
  "Cérebro, Aprendizado e Mundo Digital",
  "Machine Learning descomplicado: sistema de recomendação de jogos",
  "Desenvolvimento de uma página de jogos com API",
] as const;
type CursoNome = (typeof CURSOS)[number];

const PUBLICOS = [
  { value: "ensino-medio", label: "Ensino Médio (1º–3º ano)" },
  { value: "graduacao", label: "Graduação (1º–8º período)" },
  { value: "partiuif", label: "PartiuIF" },
  { value: "comunidade", label: "Comunidade/Outros (N/A)" },
] as const;
type PublicoValue = typeof PUBLICOS[number]["value"];

const PUBLICO_LABEL_BY_VALUE: Record<PublicoValue, string> = Object.fromEntries(
  PUBLICOS.map(p => [p.value, p.label] as const)
) as Record<PublicoValue, string>;



const TECNICOS_EM = [
  "Técnico em Design Gráfico Integrado ao Ensino Médio",
  "Técnico em Informática Integrado ao Ensino Médio",
  "Técnico em Produção de Moda Integrado ao Ensino Médio",
];

const GRADUACOES = [
  "Bacharelado em Administração",
  "Bacharelado em Ciência da Computação",
  "Licenciatura em Matemática",
  "Tecnologia em Design de Moda",
  "Tecnologia em Produção Publicitária",
];

const periodosByPublico: Record<PublicoValue, string[]> = {
  "ensino-medio": ["1º Ano", "2º Ano", "3º Ano"],
  graduacao: ["1º período","2º período","3º período","4º período","5º período","6º período","7º período","8º período"],
  partiuif: ["N/A"],
  comunidade: ["N/A"],
};

const vinculoByPublico: Record<PublicoValue, string[]> = {
  "ensino-medio": TECNICOS_EM,
  graduacao: GRADUACOES,
  partiuif: ["N/A"],
  comunidade: ["N/A"],
};

const NIVEIS = ["Iniciante", "Básico", "Intermediário", "Avançado"] as const;
export type NivelForm = typeof NIVEIS[number];

const LEVEL_ORDER: Record<NivelForm, number> = {
  Iniciante: 0,
  Básico: 1,
  Intermediário: 2,
  Avançado: 3,
};

const COURSE_LEVELS: Record<CursoNome, NivelForm> = {
  ".NET e Angular": "Avançado",
  "Blender para iniciantes (Online)": "Intermediário",
  "Blender para iniciantes (Presencial)": "Intermediário",
  "Campeonato de Jogos": "Básico",
  "Cérebro, Aprendizado e Mundo Digital": "Básico",
  "Cloud Computing": "Básico",
  "Como adquirir um computador": "Iniciante",
  "Computação Forense": "Avançado",
  "Criação de Chatbots com Python": "Intermediário",
  "Docker": "Avançado",
  "Desenvolvimento de uma página de jogos com API": "Iniciante",
  "Edição de Vídeo com DaVinci Resolve": "Intermediário",
  "HTML e CSS": "Básico",
  "Informática Básica": "Iniciante",
  "Inglês voltado para a Computação": "Básico",
  "Introdução a Deep Learning em Python": "Intermediário",
  "Introdução ao JavaScript": "Básico",
  "Introdução ao React Native": "Intermediário",
  "Introdução à Computação em Nuvem": "Básico",
  "Linux aplicado à prática de programação": "Intermediário",
  "Machine Learning descomplicado: sistema de recomendação de jogos": "Intermediário",
  "Montagem e Funcionamento de Computadores": "Básico",
  "React": "Avançado",
  "Virtualização e Introdução ao Kali Linux com foco em Pentest": "Avançado",
  "Visualização de Dados em Power BI": "Básico",
  "Workshop de LangChain": "Avançado",
};

const PARTIU_IF_ONLY: CursoNome = "Desenvolvimento de uma página de jogos com API";

const formSchema = z.object({
  cpf: z.string().regex(/^(\d{3})\.(\d{3})\.(\d{3})-(\d{2})$/u, { message: "CPF deve estar no formato 000.000.000-00" }),
  nome: z.string().min(3, { message: "Nome deve ter pelo menos 3 caracteres." }),
  email: z.string().email({ message: "Email inválido." }),
  telefone: z.string().refine(v => {
    const d = v.replace(/\D/g, "");
    return d.length >= 10 && d.length <= 11;
  }, { message: "Telefone deve ter 10 ou 11 dígitos (com DDD)." }),
  publico: z.enum(PUBLICOS.map(p => p.value) as [PublicoValue, ...PublicoValue[]], { required_error: "Selecione o público." }),
  vinculo: z.string().min(1, { message: "Selecione seu curso/programa." }),
  periodo: z.string().min(1, { message: "Selecione o período." }),
  nivel: z.enum(NIVEIS, { required_error: "Selecione seu nível." }),
  curso: z.string().min(1, { message: "Selecione um curso/área de interesse." }),
});

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSd0_PCOx5EgFOYqu7QRDIWlR8b87YnNJmawhxLOFIFemQiDYw/formResponse";

const FORM_ENTRY_IDS = {
  cpf: "entry.891552767",
  nome: "entry.950192036",
  email: "entry.512518463",
  telefone: "entry.371273980",
  publico: "entry.1302642984",
  vinculo: "entry.1492663786",
  periodo: "entry.1118774614",
  nivel: "entry.1201264866",
  curso: "entry.729292152",
};

const FormRegistro: React.FC = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cpf: "",
      nome: "",
      email: "",
      telefone: "",
      publico: "" as unknown as PublicoValue,  
      vinculo: "",
      periodo: "",
      nivel: "" as unknown as NivelForm,      
      curso: "",
    },
  });

  const isSubmitting = form.formState.isSubmitting;
  const publicoSelecionado = form.watch("publico");
  const nivelSelecionado = form.watch("nivel");

  useEffect(() => {
    if (!publicoSelecionado) {
      form.setValue("periodo", "");
      form.setValue("vinculo", "");
      return;
    }
    const periodos = periodosByPublico[publicoSelecionado];
    const vinculos = vinculoByPublico[publicoSelecionado];
    if (!periodos.includes(form.getValues("periodo"))) form.setValue("periodo", periodos[0]);
    if (!vinculos.includes(form.getValues("vinculo"))) form.setValue("vinculo", vinculos[0]);
  }, [publicoSelecionado]);

  useEffect(() => {
    const url = new URL(window.location.href);
    const cursoParam = url.searchParams.get("curso") as CursoNome | null;
    const nivelParam = url.searchParams.get("nivel") as NivelForm | null;
    if (cursoParam && (CURSOS as readonly string[]).includes(cursoParam)) {
      form.setValue("curso", cursoParam);
    }
    if (nivelParam && (NIVEIS as readonly string[]).includes(nivelParam)) {
      form.setValue("nivel", nivelParam);
    }
  }, []);

  useEffect(() => {
    const handler = (ev: Event) => {
      const { curso, nivel } = (ev as CustomEvent).detail || {};
      if (curso && (CURSOS as readonly string[]).includes(curso)) {
        form.setValue("curso", curso, { shouldValidate: true });
      }
      if (nivel && (NIVEIS as readonly string[]).includes(nivel)) {
        form.setValue("nivel", nivel, { shouldValidate: true });
      }
      document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("prefill-inscricao", handler as EventListener);
    return () => window.removeEventListener("prefill-inscricao", handler as EventListener);
  }, [form]);

  const handleCpfChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let v = e.target.value.replace(/\D/g, "");
    if (v.length > 11) v = v.slice(0, 11);
    if (v.length > 0) v = v.replace(/^(\d{3})(\d)/, "$1.$2");
    if (v.length > 3) v = v.replace(/^(\d{3})\.(\d{3})(\d)/, "$1.$2.$3");
    if (v.length > 6) v = v.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/, "$1.$2.$3-$4");
    form.setValue("cpf", v);
  };
  const handleTelefoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let d = e.target.value.replace(/\D/g, "");
    if (d.length > 11) d = d.slice(0, 11);
    let f = d;
    if (d.length <= 2) f = d;
    else if (d.length <= 6) f = `(${d.slice(0, 2)}) ${d.slice(2)}`;
    else if (d.length <= 10) f = `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
    else f = `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
    form.setValue("telefone", f);
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const fd = new FormData();
    fd.append(FORM_ENTRY_IDS.nome, values.nome);
    fd.append(FORM_ENTRY_IDS.email, values.email);
    fd.append(FORM_ENTRY_IDS.cpf, values.cpf);
    fd.append(FORM_ENTRY_IDS.telefone, values.telefone);
    fd.append(FORM_ENTRY_IDS.publico, PUBLICO_LABEL_BY_VALUE[values.publico]);
    fd.append(FORM_ENTRY_IDS.vinculo, values.vinculo);
    fd.append(FORM_ENTRY_IDS.periodo, values.periodo);
    fd.append(FORM_ENTRY_IDS.nivel, values.nivel);
    fd.append(FORM_ENTRY_IDS.curso, values.curso);

    try {
      await fetch(GOOGLE_FORM_URL, { method: "POST", mode: "no-cors", body: fd });
      toast({ title: "Inscrição enviada com sucesso!", description: "Em breve enviaremos um email com mais informações." });
      form.reset();
    } catch {
      toast({ title: "Erro ao enviar.", description: "Por favor, tente novamente.", variant: "destructive" });
    }
  };

  const periodoOptions = publicoSelecionado ? periodosByPublico[publicoSelecionado] : [];
  const isCourseDisabled = (c: CursoNome) =>
    form.getValues("nivel")
      ? LEVEL_ORDER[COURSE_LEVELS[c]] > LEVEL_ORDER[form.getValues("nivel") as NivelForm]
      : false;
  const safeId = (s: string) => s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-_:.]/g, "");

  return (
    <section id="inscricao" className="py-16 bg-encomp-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-encomp-green">&lt;</span>
          Inscrição
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
                      <Input placeholder="000.000.000-00" {...field}
                        onChange={handleCpfChange}
                        className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green" />
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
                      <Input placeholder="Seu nome completo" {...field}
                        className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green" />
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
                      <Input type="email" placeholder="seu.email@exemplo.com" {...field}
                        className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green" />
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
                      <Input placeholder="(99) 99999-9999" {...field}
                        onChange={handleTelefoneChange}
                        className="bg-encomp-dark border-encomp-green/30 focus:border-encomp-green" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="publico"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-encomp-green">Público</FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={field.value || ""} 
                        onValueChange={(v) => field.onChange(v as PublicoValue)}
                        className="grid grid-cols-1 gap-2 md:grid-cols-2"
                      >
                        {PUBLICOS.map(p => (
                          <div key={p.value} className="flex items-center space-x-2 rounded-md border border-encomp-green/20 p-2">
                            <RadioGroupItem value={p.value} id={p.value} />
                            <label htmlFor={p.value} className="text-sm text-gray-200 cursor-pointer">{p.label}</label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormField
                  control={form.control}
                  name="vinculo"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-encomp-green">Curso/Programa (vínculo)</FormLabel>
                      <FormControl>
                        <select
                          disabled={!publicoSelecionado}
                          className="w-full h-10 rounded-md border border-encomp-green/30 bg-encomp-dark px-3 py-2 text-base disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-encomp-green/50"
                          {...field}
                        >
                          {!publicoSelecionado ? (
                            <option value="">Selecione o público primeiro</option>
                          ) : (
                            (vinculoByPublico[publicoSelecionado] || []).map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))
                          )}
                        </select>
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
                          disabled={!publicoSelecionado}
                          className="w-full h-10 rounded-md border border-encomp-green/30 bg-encomp-dark px-3 py-2 text-base disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-0 focus-visible:ring-encomp-green/50"
                          {...field}
                        >
                          {!publicoSelecionado ? (
                            <option value="">Selecione o público primeiro</option>
                          ) : (
                            periodosByPublico[publicoSelecionado].map(opt => (
                              <option key={opt} value={opt}>{opt}</option>
                            ))
                          )}
                        </select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="nivel"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-encomp-green">
                      Selecione seu nível para filtrar os cursos disponíveis
                    </FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={field.value || ""} 
                        onValueChange={field.onChange}
                        className="grid grid-cols-2 gap-2 md:grid-cols-4"
                      >
                        {NIVEIS.map(n => (
                          <div key={n} className="flex items-center space-x-2 rounded-md border border-encomp-green/20 p-2">
                            <RadioGroupItem value={n} id={`nivel-${n}`} />
                            <label htmlFor={`nivel-${n}`} className="text-sm text-gray-200 cursor-pointer">{n}</label>
                          </div>
                        ))}
                      </RadioGroup>
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
                    <FormLabel className="text-encomp-green">Curso/Área de Interesse (minicurso)</FormLabel>
                    <FormControl>
                      <RadioGroup value={field.value || ""} onValueChange={field.onChange} className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        {CURSOS
                          .slice()
                          .sort((a, b) => a.localeCompare(b)) 
                          .map((c) => {
                            const disabled = isCourseDisabled(c);
                            const id = safeId(`curso-${c}`);
                            const exclusivoPartiuIF = c === PARTIU_IF_ONLY;
                            return (
                              <div key={c} className={`flex items-center space-x-2 rounded-md border p-2 ${disabled ? "border-encomp-green/10 opacity-50 pointer-events-none" : "border-encomp-green/20"}`}>
                                <RadioGroupItem value={c} id={id} disabled={disabled} />
                                <label htmlFor={id} className="text-sm text-gray-200">
                                  {c}{exclusivoPartiuIF ? " — Exclusivo PartiuIF" : ""}
                                </label>
                                {form.getValues("nivel") && (
                                  <span className="ml-auto text-[11px] text-gray-400">Nível mínimo: {COURSE_LEVELS[c]}</span>
                                )}
                              </div>
                            );
                          })}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" disabled={isSubmitting}
                className="w-full bg-encomp-green text-black font-bold gap-2">
                {isSubmitting ? "Enviando..." : (<><SendIcon size={18} />Enviar Inscrição</>)}
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </section>
  );
};

export default FormRegistro;
