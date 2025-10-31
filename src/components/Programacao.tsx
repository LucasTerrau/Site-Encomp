import React from "react";

type Formato = "Presencial" | "Online" | "Palestra" | "Atividade";

type Evento = {
  titulo: string;
  formato: Formato;
  inicio: string;
  fim?: string;
  local?: string;
  url?: string;
};

type ProgramacaoPorDia = Record<string, Evento[]>;

/* ===================== DADOS ===================== */

const programacao: ProgramacaoPorDia = {
  "03/11/2025": [
    /* Manhã (Auditório) */
    {
      titulo: "Algoritmos de destruição em massa: Big Techs, Big Data, IA e seus aspectos socioambientais",
      formato: "Palestra",
      inicio: "08:30",
      fim: "09:45",
      local: "Auditório Campus",
    },
    {
      titulo: "Do Zero ao Futuro - Como entrar no mercado de trabalho com IA no radar e o impacto das escolhas",
      formato: "Palestra",
      inicio: "10:30",
      fim: "12:00",
      local: "Auditório Campus",
    },

    /* Vespertino (Minicursos — Laboratórios) */
    {
      titulo: "Montagem e Funcionamento de Computadores – Dia 1",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório de Hardware",
    },
    {
      titulo: "Cérebro, Aprendizado e Mundo Digital – Dia 1",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório de Humanidades",
    },
    {
      titulo: "Criação de um Chat Bot com Python – Dia 1",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 4",
    },
    {
      titulo: "Informática Básica – Dia 1",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 2",
    },
    {
      titulo: "Workshop de LangChain para desenvolvimento de aplicativos LLM para iniciantes em programação",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 7",
    },

    /* Noturno (Online) */
    {
      titulo: "Blender para iniciantes (Online) – Dia 1",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/huv-nupz-igi",
    },
    {
      titulo: "Como adquirir um computador",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/rej-vepq-gfs",
    },
    {
      titulo: "Computação Forense – Dia 1",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/zok-fwrt-yyp",
    },
    {
      titulo: "Introdução a Deep learning em Python – Dia 1",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/kft-eknd-vwf",
    },
  ],

  "04/11/2025": [
    /* Manhã (Auditório) */
    {
      titulo: "Do Campus ao Mundo: Navegando décadas de transformações de carreira",
      formato: "Palestra",
      inicio: "08:30",
      fim: "09:45",
      local: "Auditório Campus",
    },
    {
      titulo: "Mesa Redonda Prof. IFSULDEMINAS BCC",
      formato: "Palestra",
      inicio: "10:30",
      fim: "12:00",
      local: "Auditório Campus",
    },

    /* Vespertino (Laboratórios) */
    {
      titulo: "Montagem e Funcionamento de Computadores – Dia 2",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório de Hardware",
    },
    {
      titulo: "Cérebro, Aprendizado e Mundo Digital – Dia 2",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório de Humanidades",
    },
    {
      titulo: "Criação de um Chat Bot com Python – Dia 2",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 4",
    },
    {
      titulo: "Informática Básica – Dia 2",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 2",
    },
    {
      titulo: "Introdução ao React Native",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 8",
    },
    {
      titulo: "Visualização de Dados em Power BI",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 9",
    },
    {
      titulo: "Criando uma página de catálogo de jogos dinâmica com ap (PartiuIF) – Dia 1",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 6",
    },

    /* Noturno (Online) */
    {
      titulo: "Blender para iniciantes (Online) – Dia 2",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/huv-nupz-igi",
    },
    {
      titulo: "Edição de Vídeos com DaVinci – Dia 1",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/tvh-yept-mxf",
    },
    {
      titulo: "Introdução a Deep learning em Python – Dia 2",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/kft-eknd-vwf",
    },
  ],

  "05/11/2025": [
    /* Manhã JOSIF (Auditório) */
    {
      titulo: "JOSIF",
      formato: "Atividade",
      inicio: "08:30",
      fim: "09:45",
      local: "Auditório Campus",
    },
    {
      titulo: "JOSIF",
      formato: "Atividade",
      inicio: "10:30",
      fim: "12:00",
      local: "Auditório Campus",
    },

    /* Vespertino (Laboratórios) */
    {
      titulo: "Inglês voltado para a computação",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 1",
    },
    {
      titulo: "Blender para iniciantes – Dia 1",
      formato: "Presencial",
      inicio: "13:30",
      fim: "17:30",
      local: "Laboratório 4",
    },
    {
      titulo: "Montagem e Funcionamento de Computadores – Dia 3",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório de Hardware",
    },
    {
      titulo: "Introdução ao Javascript",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 2",
    },
    {
      titulo: "React – Dia 1",
      formato: "Presencial",
      inicio: "13:30",
      fim: "17:30",
      local: "Laboratório 8",
    },
    {
      titulo: "Virtualização e Introdução ao Kali Linux com foco em Pentest – Dia 1",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 9",
    },
    {
      titulo: "Criando uma página de catálogo de jogos dinâmica com ap (PartiuIF) – Dia 2",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 6",
    },

    /* Noturno (Online) */
    {
      titulo: "Blender para iniciantes (Online) – Dia 3",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/huv-nupz-igi",
    },
    {
      titulo: "Computação Forense – Dia 2",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/zok-fwrt-yyp",
    },
    {
      titulo: "Edição de Vídeos com DaVinci – Dia 2",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/tvh-yept-mxf",
    },
    {
      titulo: "Introdução à Computação em Nuvem",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/ntq-cgsr-dde",
    },
  ],

  "06/11/2025": [
    /* Manhã JOSIF (Auditório) */
    {
      titulo: "JOSIF",
      formato: "Atividade",
      inicio: "08:30",
      fim: "09:45",
      local: "Auditório Campus",
    },
    {
      titulo: "JOSIF",
      formato: "Atividade",
      inicio: "10:30",
      fim: "12:00",
      local: "Auditório Campus",
    },

    /* Vespertino (Laboratórios) */
    {
      titulo: "Blender para iniciantes – Dia 2",
      formato: "Presencial",
      inicio: "13:30",
      fim: "17:30",
      local: "Laboratório 4",
    },
    {
      titulo: "HTML e CSS – Dia 1",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 6",
    },
    {
      titulo: "Machine Learning totalmente descomplicado: Criando um sistema de recomendação de jogos",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 2",
    },
    {
      titulo: "React – Dia 2",
      formato: "Presencial",
      inicio: "13:30",
      fim: "17:30",
      local: "Laboratório 8",
    },
    {
      titulo: "Virtualização e Introdução ao Kali Linux com foco em Pentest – Dia 2",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 9",
    },

    /* Noturno (Online) */
    {
      titulo: "A importância da privacidade na Internet e a Regulamentação do Uso de IA nos ambientes Virtuais",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/xjh-vqdk-hrn",
    },
    {
      titulo: "Computação Forense – Dia 3",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/zok-fwrt-yyp",
    },
    {
      titulo: "Edição de Vídeos com DaVinci – Dia 3",
      formato: "Online",
      inicio: "19:00",
      fim: "22:00",
      local: "Google Meet",
      url: "meet.google.com/tvh-yept-mxf",
    },
  ],

  "07/11/2025": [
    /* Manhã JOSIF (Auditório) */
    {
      titulo: "JOSIF",
      formato: "Atividade",
      inicio: "08:30",
      fim: "09:45",
      local: "Auditório Campus",
    },
    {
      titulo: "JOSIF",
      formato: "Atividade",
      inicio: "10:30",
      fim: "12:00",
      local: "Auditório Campus",
    },

    /* Vespertino (Laboratórios) */
    {
      titulo: "Blender para iniciantes – Dia 3",
      formato: "Presencial",
      inicio: "13:30",
      fim: "17:30",
      local: "Laboratório 4",
    },
    {
      titulo: ".Net e Angular",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 2",
    },
    {
      titulo: "Campeonato de Jogos",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 9",
    },
    {
      titulo: "Docker",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 7",
    },
    {
      titulo: "HTML e CSS – Dia 2",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 6",
    },
    {
      titulo: "Linux aplicado à prática de programação",
      formato: "Presencial",
      inicio: "13:30",
      fim: "16:30",
      local: "Laboratório 8",
    },
  ],
};

/* ===================== HELPERS ===================== */

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

const normalizeTitle = (t: string) =>
  t.replace(/\(dia\s*\d+\)/i, "").trim();

const ATIVIDADES_FIXAS: ReadonlyArray<{
  hora: string;
  titulo: string;
  formato: Formato;
  local: string;
}> = [
  { hora: "08:00", titulo: "Credenciamento", formato: "Presencial", local: "Auditório" },
  { hora: "08:15", titulo: "Apresentação musical", formato: "Presencial", local: "Auditório" },
  { hora: "09:45", titulo: "Intervalo", formato: "Presencial", local: "Auditório" },
  { hora: "10:15", titulo: "Apresentação musical", formato: "Presencial", local: "Auditório" },
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
  Object.entries(source).forEach(([data, arr]) =>
    arr.forEach((ev) => flat.push({ data, ev }))
  );
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
    arr.sort(
      (a, b) => toTs(a.data, a.ev.inicio) - toTs(b.data, b.ev.inicio)
    );
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

/* ===================== COMPONENTE ===================== */

const Programacao: React.FC = () => {
  const dias = React.useMemo(
    () => Object.keys(programacao).sort((a, b) => toDate(a) - toDate(b)),
    []
  );
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

        {/* Navegação por dias */}
        <div className="sticky top-14 z-30 mb-4 bg-encomp-darkGray/90 backdrop-blur border-b border-encomp-green/20">
          <div className="max-w-[1100px] mx-auto">
            <div className="flex items-center justify-center gap-2 py-3 px-2">
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
                      ${
                        active
                          ? "bg-encomp-green text-black"
                          : "bg-encomp-green/10 text-encomp-green border border-encomp-green/30 hover:bg-encomp-green/20"
                      }`}
                      aria-pressed={active}
                    >
                      {label}
                    </button>
                  );
                })}
              </div>

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
          <h3 className="text-lg md:text-xl font-bold mb-4 text-encomp-green font-orbitron">
            {titulo}
          </h3>

          {/* DESKTOP/TABLET: tabela com uma linha por atividade */}
          <table className="hidden md:table min-w-full bg-encomp-dark border border-encomp-green/30 text-gray-200 rounded-lg">
            <thead>
              <tr className="bg-encomp-dark text-encomp-green">
                <th className="p-3 border border-encomp-green/30 w-28 text-left">Horário</th>
                <th className="p-3 border border-encomp-green/30 text-left">Atividade</th>
                <th className="p-3 border border-encomp-green/30 w-32 text-left">Formato</th>
                <th className="p-3 border border-encomp-green/30 w-72 text-left">Local / Link</th>
              </tr>
            </thead>
            <tbody>
              {grupos.flatMap(({ hora, itens }) =>
                itens.map((ev, idx) => {
                  const key = `${diaAtivo}|${ev.titulo}|${ev.inicio}`;
                  const baseTitle = normalizeTitle(ev.titulo);
                  const total = totalByTitle.get(baseTitle) ?? 1;
                  const ordem = indexByKey.get(key);
                  const labelTipo = tipoDoEvento(ev);
                  
                  let tituloFormatado = ev.titulo;
                  if (ev.formato !== "Palestra" && 
                      !ATIVIDADES_SET.has(ev.titulo) && 
                      total > 1 && 
                      ordem) {
                    tituloFormatado = `${baseTitle} – Dia ${ordem}`;
                  }

                  // Para eventos que começam no mesmo horário, mostrar horário apenas na primeira linha
                  const mostrarHorario = idx === 0;

                  return (
                    <tr key={`${diaAtivo}-${hora}-${idx}`} className="hover:bg-encomp-dark transition">
                      <td className="p-3 border border-encomp-green/20 font-semibold">
                        {mostrarHorario && (
                          <>
                            {hora}
                            {ev.fim && ` - ${ev.fim}`}
                          </>
                        )}
                      </td>
                      
                      <td className="p-3 border border-encomp-green/20">
                        <div className="flex flex-col">
                          <span className="text-sm text-gray-300">{labelTipo}</span>
                          <span className="text-gray-100">{tituloFormatado}</span>
                        </div>
                      </td>

                      <td className="p-3 border border-encomp-green/20">
                        <span
                          className={`px-2 py-1 rounded-full text-xs ${
                            badgeByFormato[ev.formato === "Online" ? "Online" : "Presencial"]
                          }`}
                        >
                          {ev.formato === "Online" ? "Online" : "Presencial"}
                        </span>
                      </td>

                      <td className="p-3 border border-encomp-green/20">
                        {ev.formato === "Online" ? (
                          <div className="space-y-1">
                            <div className="text-gray-100">Plataforma: {ev.local}</div>
                            {ev.url && (
                              <div className="text-gray-300 break-all">
                                Link: {ev.url}
                              </div>
                            )}
                          </div>
                        ) : (
                          <div className="text-gray-100">{ev.local || "-"}</div>
                        )}
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>

          {/* MOBILE: cards com uma linha por atividade */}
          <ul className="md:hidden space-y-4">
            {grupos.flatMap(({ hora, itens }) =>
              itens.map((ev, idx) => {
                const key = `${diaAtivo}|${ev.titulo}|${ev.inicio}`;
                const baseTitle = normalizeTitle(ev.titulo);
                const total = totalByTitle.get(baseTitle) ?? 1;
                const ordem = indexByKey.get(key);
                const labelTipo = tipoDoEvento(ev);
                
                let tituloFormatado = ev.titulo;
                if (ev.formato !== "Palestra" && 
                    !ATIVIDADES_SET.has(ev.titulo) && 
                    total > 1 && 
                    ordem) {
                  tituloFormatado = `${baseTitle} (Dia ${ordem})`;
                }

                return (
                  <li
                    key={`${diaAtivo}-${hora}-${idx}`}
                    className="border border-encomp-green/30 rounded-xl p-4 bg-encomp-dark"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="font-semibold text-encomp-green text-lg">
                        {hora}
                        {ev.fim && ` - ${ev.fim}`}
                      </span>
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          badgeByFormato[ev.formato === "Online" ? "Online" : "Presencial"]
                        }`}
                      >
                        {ev.formato === "Online" ? "Online" : "Presencial"}
                      </span>
                    </div>

                    <div className="space-y-2">
                      <div className="text-xs text-encomp-green uppercase font-semibold">
                        {labelTipo}
                      </div>
                      <div className="text-gray-100 text-sm">{tituloFormatado}</div>
                      
                      {/* Local/Link */}
                      {ev.formato === "Online" ? (
                        <div className="text-xs text-gray-400 space-y-1">
                          <div>Plataforma: {ev.local}</div>
                          {ev.url && (
                            <div className="break-all">Link: {ev.url}</div>
                          )}
                        </div>
                      ) : (
                        ev.local && (
                          <div className="text-xs text-gray-400">
                            Local: {ev.local}
                          </div>
                        )
                      )}
                    </div>
                  </li>
                );
              })
            )}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Programacao;