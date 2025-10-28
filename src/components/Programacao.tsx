import React from "react";

type Formato = "Presencial" | "Online" | "Palestra" | "Atividade";

type Evento = {
  titulo: string;
  formato: Formato;
  inicio: string;
  fim?: string;
  local?: string;
};

type ProgramacaoPorDia = Record<string, Evento[]>;

const programacao: ProgramacaoPorDia = {
  "03/11/2025": [
    { titulo: "Algoritmos de destruição em massa: Big Techs, Big Data, IA e seus aspectos socioambientais.", formato: "Palestra", inicio: "08:30", local: "Auditório" },
    { titulo: "Do Zero ao Futuro - Como entrar no mercado de trabalho com IA no radar e o impacto das escolhas.", formato: "Palestra", inicio: "10:30", local: "Auditório" },

    { titulo: "Cérebro, Aprendizado e Mundo Digital", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Criação de um Chat Bot com Python", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Informática Básica", formato: "Presencial", inicio: "13:30", local: "Lab. 1" },
    { titulo: "Montagem e Funcionamento de Computadores", formato: "Presencial", inicio: "13:30", local: "Lab. Hardware" },
    { titulo: "Workshop de LangChain para desenvolvimento de aplicativos LLM para iniciantes em programação", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },

    { titulo: "Blender para iniciantes (Online)", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Como adquirir um computador", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Computação Forense", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Introdução a Deep learning em Python", formato: "Online", inicio: "19:00", local: "YouTube" },
  ],

  "04/11/2025": [
    { titulo: "Do Campus ao Mundo: Navegando décadas de transformações de carreira.", formato: "Palestra", inicio: "08:30", local: "Auditório" },
    { titulo: "Mesa redonda com professores do IFSULDEMINAS sobre diversos temas da computação.", formato: "Palestra", inicio: "10:30", local: "Auditório" },

    { titulo: "Cérebro, Aprendizado e Mundo Digital", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Criação de um Chat Bot com Python", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Informática Básica", formato: "Presencial", inicio: "13:30", local: "Lab. 1" },
    { titulo: "Introdução ao React Native", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Montagem e Funcionamento de Computadores", formato: "Presencial", inicio: "13:30", local: "Lab. Hardware" },
    { titulo: "Visualização de Dados em Power BI", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Criando uma página de catálogo de jogos dinâmica com API (PartiuIF)", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },

    { titulo: "Blender para iniciantes (Online)", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Edição de Vídeos com DaVinci", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Introdução a Deep learning em Python", formato: "Online", inicio: "19:00", local: "YouTube" },
  ],

  "05/11/2025": [
    { titulo: "Abertura oficial do Josif e Apresentação Artística e Cultural: Coral Novo Tom", formato: "Atividade", inicio: "08:30", local: "Auditório" },
    { titulo: "Inteligência Artificial, Ética e Pesquisa", formato: "Palestra", inicio: "09:00", local: "Auditório" },
    { titulo: "Inteligência Artificial aplicada à pesquisa: recursos práticos", formato: "Palestra", inicio: "10:00", local: "Auditório" },

    { titulo: "Blender para iniciantes", formato: "Presencial", inicio: "13:30", local: "Lab. 4" },
    { titulo: "Inglês voltado para a computação", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Javascript", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Montagem e Funcionamento de Computadores", formato: "Presencial", inicio: "13:30", local: "Lab. Hardware" },
    { titulo: "React", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Virtualização e Introdução ao Kali Linux com foco em Pentest", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Criando uma página de catálogo de jogos dinâmica com API (PartiuIF)", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },

    { titulo: "Blender para iniciantes (Online)", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Computação Forense", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Edição de Vídeos com DaVinci", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Introdução à Computação em Nuvem", formato: "Online", inicio: "19:00", local: "YouTube" },
  ],

  "06/11/2025": [
    { titulo: "Abertura do 2º dia do Josif e Apresentação Artística e Cultural: Coral do CAPS", formato: "Atividade", inicio: "08:30", local: "Auditório" },
    { titulo: "Inteligência Artificial, Ética e Pesquisa", formato: "Palestra", inicio: "09:00", local: "Auditório" },
    { titulo: "Como aumentar o impacto científico, social e econômico da pesquisa acadêmica?", formato: "Palestra", inicio: "09:00", local: "Auditório" },

    { titulo: "Blender para iniciantes", formato: "Presencial", inicio: "13:30", local: "Lab. 4" },
    { titulo: "HTML e CSS", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Machine Learning totalmente descomplicado: Criando um sistema de recomendação de jogos", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "React", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Virtualização e Introdução ao Kali Linux com foco em Pentest", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },

    { titulo: "A importância da privacidade na Internet e a Regulamentação do Uso de IA nos ambientes Virtuais", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Computação Forense", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Edição de Vídeos com DaVinci", formato: "Online", inicio: "19:00", local: "YouTube" },
  ],

  "07/11/2025": [
    { titulo: "Abertura do 3º dia do Evento e Apresentação Artística e Cultural: Você na cena", formato: "Atividade", inicio: "08:30", local: "Auditório" },
    { titulo: "Escola e Racismo: Entre o Silêncio e a Ação", formato: "Palestra", inicio: "09:00", local: "Auditório" },
    { titulo: "O pensar com a Inteligência Artificial", formato: "Palestra", inicio: "10:00", local: "Auditório" },

    { titulo: ".Net e Angular", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Blender para iniciantes", formato: "Presencial", inicio: "13:30", local: "Lab. 4" },
    { titulo: "Docker", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "HTML e CSS", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Linux aplicado à prática de programação", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Campeonato de Jogos", formato: "Palestra", inicio: "13:30", local: "Lab. de Jogos / LAN" },
  ],
};

const badgeByFormato: Record<"Presencial" | "Online", string> = {
  Presencial: "bg-amber-600/20 text-amber-300 border border-amber-500/30",
  Online: "bg-sky-600/20 text-sky-300 border border-sky-500/30",
};

function weekdayPtBr(dateStr: string) {
  const [d, m, y] = dateStr.split("/").map(Number);
  const dt = new Date(y, m - 1, d);
  return new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(dt);
}

function groupByHora(eventos: Evento[]) {
  const map = new Map<string, Evento[]>();
  eventos.forEach((ev) => {
    const arr = map.get(ev.inicio) ?? [];
    arr.push(ev);
    map.set(ev.inicio, arr);
  });
  return Array.from(map.entries())
    .sort(([a], [b]) => (a < b ? -1 : a > b ? 1 : 0))
    .map(([hora, itens]) => ({ hora, itens }));
}

const normalizeTitle = (t: string) => t.replace(/\(dia\s*\d+\)/i, "").trim();

const ATIVIDADES_FIXAS: ReadonlyArray<{ hora: string; titulo: string; formato: Formato }> = [
  { hora: "08:00", titulo: "Credenciamento", formato: "Presencial" },
  { hora: "08:15", titulo: "Apresentação musical", formato: "Presencial" },
  { hora: "09:45", titulo: "Intervalo", formato: "Presencial" },
  { hora: "10:15", titulo: "Apresentação musical", formato: "Presencial" },
];

const ATIVIDADES_SET = new Set<string>(ATIVIDADES_FIXAS.map((a) => a.titulo));

function hasPalestraNoHorario(eventos: Evento[], hora: string) {
  return eventos.some((e) => e.formato === "Palestra" && e.inicio === hora);
}

function injectExtras(eventos: Evento[]): Evento[] {
  const res = [...eventos];
  const add = (horas: string[]) => {
    res.push(
      ...ATIVIDADES_FIXAS.filter((a) => horas.includes(a.hora)).map((a) => ({
        titulo: a.titulo,
        formato: a.formato,
        inicio: a.hora,
      }))
    );
  };
  if (hasPalestraNoHorario(eventos, "08:30")) add(["08:00", "08:15"]);
  if (hasPalestraNoHorario(eventos, "10:30")) add(["09:45", "10:15"]);
  return res;
}

function buildDiaIndices(source: ProgramacaoPorDia) {
  type Flat = { data: string; ev: Evento };
  const flat: Flat[] = [];
  Object.entries(source).forEach(([data, arr]) => arr.forEach((ev) => flat.push({ data, ev })));
  const byTitle = new Map<string, Flat[]>();
  flat.forEach((f) => {
    const key = normalizeTitle(f.ev.titulo);
    const list = byTitle.get(key) ?? [];
    list.push(f);
    byTitle.set(key, list);
  });
  const toTs = (data: string, hora: string) => {
    const [d, m, y] = data.split("/").map(Number);
    const [h, min] = hora.split(":").map(Number);
    return new Date(y, m - 1, d, h, min).getTime();
  };
  const indexByKey = new Map<string, number>();
  const totalByTitle = new Map<string, number>();
  byTitle.forEach((arr, key) => {
    arr.sort((a, b) => toTs(a.data, a.ev.inicio) - toTs(b.data, b.ev.inicio));
    totalByTitle.set(key, arr.length);
    arr.forEach((f, i) => {
      indexByKey.set(`${f.data}|${f.ev.titulo}|${f.ev.inicio}`, i + 1);
    });
  });
  return { indexByKey, totalByTitle };
}

const { indexByKey, totalByTitle } = buildDiaIndices(programacao);

const tipoDoEvento = (ev: Evento) =>
  ATIVIDADES_SET.has(ev.titulo)
    ? "Atividade"
    : ev.formato === "Palestra"
    ? "Palestra"
    : ev.formato === "Atividade"
    ? "Atividade"
    : "Minicurso";

const toDate = (d: string) => {
  const [dd, mm, yy] = d.split("/").map(Number);
  return new Date(yy, mm - 1, dd).getTime();
};

const Programacao: React.FC = () => {
  const dias = React.useMemo(() => Object.keys(programacao).sort((a, b) => toDate(a) - toDate(b)), []);
  const [diaAtivo, setDiaAtivo] = React.useState<string>(dias[0]);

  const eventosDoDia = programacao[diaAtivo];
  const eventosComExtras = injectExtras(eventosDoDia);
  const grupos = groupByHora(eventosComExtras);
  const dia = weekdayPtBr(diaAtivo);
  const titulo = `${dia.charAt(0).toUpperCase() + dia.slice(1)} — ${diaAtivo}`;

  return (
    <section id="programacao" className="py-16 bg-encomp-darkGray scroll-mt-24">
      <div className="container mx-auto max-w-[1100px] px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-orbitron">
          <span className="text-encomp-green">&lt;</span>
          Programação
          <span className="text-encomp-green">/&gt;</span>
        </h2>

        <div className="sticky top-14 z-30 mb-4 bg-encomp-darkGray/90 backdrop-blur border-b border-encomp-green/20">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex items-center justify-center gap-2 py-3 px-2">
              {/* Prev */}
              <button
                onClick={() => {
                  const i = dias.indexOf(diaAtivo);
                  const prev = i <= 0 ? dias[dias.length - 1] : dias[i - 1];
                  setDiaAtivo(prev);
                }}
                aria-label="Dia anterior"
                className="hidden xs:inline-flex h-8 w-8 items-center justify-center rounded-full border border-encomp-green/30 text-encomp-green hover:bg-encomp-green/15"
              >
                ◀
              </button>

              {/* Chips centralizados e com quebra de linha */}
              <div className="flex flex-wrap justify-center gap-2">
                {dias.map((d) => {
                  const wday = weekdayPtBr(d);
                  const label = `${wday.charAt(0).toUpperCase() + wday.slice(1)} • ${d}`;
                  const active = d === diaAtivo;
                  return (
                    <button
                      key={d}
                      onClick={() => setDiaAtivo(d)}
                      className={`px-3 py-1.5 rounded-full text-sm whitespace-nowrap transition
                      ${active
                          ? "bg-encomp-green text-black"
                          : "bg-encomp-green/10 text-encomp-green border border-encomp-green/30 hover:bg-encomp-green/20"}`}
                      aria-pressed={active}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

              {/* Next */}
              <button
                onClick={() => {
                  const i = dias.indexOf(diaAtivo);
                  const next = i >= dias.length - 1 ? dias[0] : dias[i + 1];
                  setDiaAtivo(next);
                }}
                aria-label="Próximo dia"
                className="hidden xs:inline-flex h-8 w-8 items-center justify-center rounded-full border border-encomp-green/30 text-encomp-green hover:bg-encomp-green/15"
              >
                ▶
              </button>
            </div>
          </div>
        </div>

        <div className="bg-encomp-dark-grey rounded-lg p-4 md:p-6 border border-encomp-green/30">
          <h3 className="text-lg md:text-xl font-bold mb-4 text-encomp-green font-orbitron">{titulo}</h3>

          {/* Desktop/Tablet: tabela */}
          <table className="hidden md:table min-w-full bg-encomp-dark border border-encomp-green/30 text-gray-200 rounded-lg">
            <thead>
              <tr className="bg-encomp-dark text-encomp-green">
                <th className="p-3 border border-encomp-green/30 w-24 text-left">Horário</th>
                <th className="p-3 border border-encomp-green/30 text-left">Atividades</th>
                <th className="p-3 border border-encomp-green/30 w-32 text-left">Formato</th>
              </tr>
            </thead>
            <tbody>
              {grupos.map(({ hora, itens }) => {
                let formatosUnicos = Array.from(
                  new Set(
                    itens
                      .filter((i) => !ATIVIDADES_SET.has(i.titulo))
                      .map((i) => (i.formato === "Online" ? "Online" : "Presencial"))
                  )
                );
                if (formatosUnicos.length === 0) {
                  formatosUnicos = Array.from(new Set(itens.map((i) => (i.formato === "Online" ? "Online" : "Presencial"))));
                }

                return (
                  <tr key={`${diaAtivo}-${hora}`} className="hover:bg-encomp-dark transition align-top">
                    <td className="p-3 border border-encomp-green/20 font-semibold">{hora}</td>
                    <td className="p-3 border border-encomp-green/20">
                      <ul className="space-y-2">
                        {itens.map((ev, idx) => {
                          const key = `${diaAtivo}|${ev.titulo}|${ev.inicio}`;
                          const baseTitle = normalizeTitle(ev.titulo);
                          const total = totalByTitle.get(baseTitle) ?? 1;
                          const ordem = indexByKey.get(key);
                          const labelTipo = tipoDoEvento(ev);
                          const base = `${hora} - ${labelTipo} - ${baseTitle}`;
                          const text =
                            ev.formato !== "Palestra" && !ATIVIDADES_SET.has(ev.titulo) && total > 1 && ordem
                              ? `${base} — Dia ${ordem}`
                              : base;

                          return (
                            <li key={idx} className="flex flex-wrap items-center gap-2">
                              <span>{text}</span>
                            </li>
                          );
                        })}
                      </ul>
                    </td>
                    <td className="p-3 border border-encomp-green/20">
                      <div className="flex flex-wrap gap-2">
                        {formatosUnicos.map((f) => (
                          <span key={f} className={`px-2 py-1 rounded-full text-xs ${badgeByFormato[f as "Presencial" | "Online"]}`}>
                            {f}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          {/* Mobile: cards empilhados */}
          <ul className="md:hidden space-y-3">
            {grupos.map(({ hora, itens }) => {
              const formatosUnicos = Array.from(
                new Set(
                  itens.map((i) => (i.formato === "Online" ? "Online" : "Presencial"))
                )
              );
              return (
                <li key={`${diaAtivo}-${hora}`} className="border border-encomp-green/30 rounded-xl p-3 bg-encomp-dark">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-encomp-green">{hora}</span>
                    <div className="flex gap-1">
                      {formatosUnicos.map((f) => (
                        <span key={f} className={`px-2 py-0.5 rounded-full text-[10px] ${badgeByFormato[f as "Presencial" | "Online"]}`}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    {itens.map((ev, idx) => {
                      const key = `${diaAtivo}|${ev.titulo}|${ev.inicio}`;
                      const baseTitle = normalizeTitle(ev.titulo);
                      const total = totalByTitle.get(baseTitle) ?? 1;
                      const ordem = indexByKey.get(key);
                      const labelTipo = tipoDoEvento(ev);
                      const text =
                        ev.formato !== "Palestra" && !ATIVIDADES_SET.has(ev.titulo) && total > 1 && ordem
                          ? `${labelTipo} — ${baseTitle} (Dia ${ordem})`
                          : `${labelTipo} — ${baseTitle}`;

                      return (
                        <div key={idx} className="text-sm leading-5">
                          <div className="text-gray-100 line-clamp-3">{text}</div>
                          {ev.local && <div className="text-[11px] text-gray-400 mt-0.5">{ev.local}</div>}
                        </div>
                      );
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Programacao;
