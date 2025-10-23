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

// Lista completa de cursos (nomes exatos usados no site)
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
  "A importância da privacidade na Internet e a Regulamentação do Uso de IA nos ambientes Virtuais",
] as const;
type CursoNome = (typeof CURSOS)[number];

// 🔒 Cursos com vagas preenchidas (bloqueados no formulário)
const EXCEDENTES = new Set<CursoNome>([
  "Blender para iniciantes (Presencial)",
  "HTML e CSS",
  "Introdução ao JavaScript",
  "Informática Básica",
  "Inglês voltado para a Computação",
  "Montagem e Funcionamento de Computadores",
  "Cérebro, Aprendizado e Mundo Digital",
  "Machine Learning descomplicado: sistema de recomendação de jogos",
  "Desenvolvimento de uma página de jogos com API", // também é Exclusivo PartiuIF
  "Criação de Chatbots com Python",
]);

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
  "A importância da privacidade na Internet e a Regulamentação do Uso de IA nos ambientes Virtuais": "Iniciante",
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
  const cursoSelecionado = form.watch("curso") as CursoNome | "";

  // Helper para bloquear curso excedente (vagas preenchidas)
  const isExcedenteCurso = (c: string | null | undefined): c is CursoNome =>
    !!c && (EXCEDENTES as Set<string>).has(c);

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

  // Prefill via URL
  useEffect(() => {
    const url = new URL(window.location.href);
    const cursoParam = url.searchParams.get("curso") as CursoNome | null;
    const nivelParam = url.searchParams.get("nivel") as NivelForm | null;

    if (nivelParam && (NIVEIS as readonly string[]).includes(nivelParam)) {
      form.setValue("nivel", nivelParam);
    }
    if (cursoParam && (CURSOS as readonly string[]).includes(cursoParam)) {
      if (isExcedenteCurso(cursoParam)) {
        toast({
          title: "Inscrições encerradas",
          description: "Este minicurso está com vagas preenchidas.",
          variant: "destructive",
        });
        // Não seta curso lotado
      } else {
        form.setValue("curso", cursoParam);
      }
    }
  }, []);

  // Prefill via evento dos cards
  useEffect(() => {
    const handler = (ev: Event) => {
      const { curso, nivel } = (ev as CustomEvent).detail || {};
      if (nivel && (NIVEIS as readonly string[]).includes(nivel)) {
        form.setValue("nivel", nivel, { shouldValidate: true });
      }
      if (curso && (CURSOS as readonly string[]).includes(curso)) {
        if (isExcedenteCurso(curso)) {
          toast({
            title: "Inscrições encerradas",
            description: "Este minicurso está com vagas preenchidas.",
            variant: "destructive",
          });
        } else {
          form.setValue("curso", curso, { shouldValidate: true });
        }
      }
      document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("prefill-inscricao" as any, handler as EventListener);
    return () => window.removeEventListener("prefill-inscricao" as any, handler as EventListener);
  }, [form, toast]);

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

  // Submissão
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    // 🚫 Bloqueio adicional no submit (garantia)
    if (isExcedenteCurso(values.curso)) {
      toast({
        title: "Inscrições encerradas",
        description: "Este minicurso está com vagas preenchidas.",
        variant: "destructive",
      });
      return;
    }

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
  const safeId = (s: string) => s.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-_:.]/g, "");

  // Checagem de data: zera as horas para comparar somente a data (independente do horário)
  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);
  const dataLiberacao = new Date(2025, 8, 30); // 30/09/2025 (mês 0-based)
  dataLiberacao.setHours(0, 0, 0, 0);

  if (hoje < dataLiberacao) {
    return (
      <section id="inscricao" className="py-16 bg-encomp-darkGray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="text-encomp-green">&lt;</span>
            Inscrições somente a partir de 30 de setembro.
            <span className="text-encomp-green">/&gt;</span>
          </h2>
        </div>
      </section>
    );
  }

  const isCursoExcedenteSelecionado = isExcedenteCurso(cursoSelecionado);
  const submitDisabled = isSubmitting || isCursoExcedenteSelecionado;

  return (
    <section id="inscricao" className="py-16 bg-encomp-darkGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-encomp-green">&lt;</span>
          Inscrição
          <span className="text-encomp-green">/&gt;</span>
        </h2>

        {/* Aviso quando um curso lotado estiver selecionado (ex: via prefill antigo) */}
        {isCursoExcedenteSelecionado && (
          <div className="max-w-2xl mx-auto mb-4 rounded-md border border-rose-500/40 bg-rose-500/10 text-rose-200 p-3 text-sm">
            Inscrições encerradas para este minicurso (vagas preenchidas). Selecione outro curso.
          </div>
        )}

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
                    <FormLabel className="text-encomp-green">Nível</FormLabel>
                    <FormControl>
                      <RadioGroup
                        value={field.value || ""} 
                        onValueChange={(v) => {
                          field.onChange(v as NivelForm);
                          form.setValue("curso", ""); // reset ao trocar nível
                        }}
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
                    <FormLabel className="text-encomp-green">
                      Curso de interesse {nivelSelecionado && `(${nivelSelecionado})`}
                    </FormLabel>
                    <FormControl>
                      <div className="space-y-2 max-h-64 overflow-y-auto border border-encomp-green/20 rounded-md p-2">
                        {!nivelSelecionado ? (
                          <p className="text-gray-400 text-sm p-2">Selecione um nível primeiro</p>
                        ) : (
                          <RadioGroup
                            value={field.value || ""}
                            onValueChange={(v) => {
                              if (isExcedenteCurso(v)) {
                                toast({
                                  title: "Inscrições encerradas",
                                  description: "Este minicurso está com vagas preenchidas.",
                                  variant: "destructive",
                                });
                                return; // não permite selecionar
                              }
                              // Exclusivo PartiuIF continua filtrado pela lógica de público mais abaixo
                              field.onChange(v);
                            }}
                          >
                            {CURSOS
                              .filter(curso => {
                                // filtra por nível selecionado
                                const nivelOk = COURSE_LEVELS[curso] === nivelSelecionado;
                                if (!nivelOk) return false;
                                // esconde PartiuIF para quem não é PartiuIF
                                if (curso === PARTIU_IF_ONLY && publicoSelecionado !== "partiuif") return false;
                                return true;
                              })
                              .sort((a, b) => a.localeCompare(b))
                              .map(curso => {
                                const isExced = EXCEDENTES.has(curso);
                                const labelExtra =
                                  (curso === PARTIU_IF_ONLY ? " — Exclusivo PartiuIF" : "") +
                                  (isExced ? " — (VAGAS PREENCHIDAS)" : "");
                                return (
                                  <div
                                    key={curso}
                                    className={`flex items-start space-x-2 p-2 rounded-md border ${
                                      isExced
                                        ? "border-rose-500/40 bg-rose-500/5 opacity-80"
                                        : "border-encomp-green/20 hover:border-encomp-green/40"
                                    }`}
                                  >
                                    <RadioGroupItem
                                      value={curso}
                                      id={safeId(`curso-${curso}`)}
                                      // visualmente permite ver, mas o onValueChange bloqueia seleção de excedentes
                                    />
                                    <label 
                                      htmlFor={safeId(`curso-${curso}`)} 
                                      className={`text-sm leading-relaxed cursor-pointer ${
                                        isExced ? "text-rose-300" : "text-gray-200"
                                      }`}
                                    >
                                      {curso}{labelExtra}
                                    </label>
                                  </div>
                                );
                              })}
                          </RadioGroup>
                        )}
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={submitDisabled}
                className={`w-full font-bold gap-2 ${
                  submitDisabled
                    ? "bg-gray-600 text-white cursor-not-allowed"
                    : "bg-encomp-green text-black hover:opacity-90"
                }`}
                aria-disabled={submitDisabled}
              >
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
