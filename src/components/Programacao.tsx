import React from "react";

type Formato = "Presencial" | "Online" | "Palestra";

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
    { titulo: "Palestra — Rildo Borges Duarte", formato: "Palestra", inicio: "08:30", local: "Auditório" },
    { titulo: "Palestra — Vinícius Otávio de Lima Moreira", formato: "Palestra", inicio: "10:30", local: "Auditório" },
    { titulo: "Cérebro, Aprendizado e Mundo Digital", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Criação de um Chat Bot com Python", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Informática Básica", formato: "Presencial", inicio: "13:30", local: "Lab. 1" },
    { titulo: "Montagem e Funcionamento de Computadores", formato: "Presencial", inicio: "13:30", local: "Lab. Hardware" },
    { titulo: "PartiuIF", formato: "Presencial", inicio: "13:30", local: "Área Externa / Campus" },
    { titulo: "Blender para iniciantes (Online)", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Como adquirir um computador", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Introdução a Deep learning em Python (dia 1)", formato: "Online", inicio: "19:00", local: "YouTube" },
  ],
  "04/11/2025": [
    { titulo: "Palestra — Nélito Bernardes Júnior", formato: "Palestra", inicio: "08:30", local: "Auditório" },
    { titulo: "Palestra — Professores do IFSULDEMINAS (Mesa Redonda)", formato: "Palestra", inicio: "10:30", local: "Auditório" },
    { titulo: "Cérebro, Aprendizado e Mundo Digital", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Introdução ao React Native", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Montagem e Funcionamento de Computadores", formato: "Presencial", inicio: "13:30", local: "Lab. Hardware" },
    { titulo: "Visualização de Dados em Power BI", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "PartiuIF", formato: "Presencial", inicio: "13:30", local: "Área Externa / Campus" },
    { titulo: "Introdução a Deep learning em Python (dia 2)", formato: "Online", inicio: "19:00", local: "YouTube" },
  ],
  "05/11/2025": [
    { titulo: "Blender para iniciantes", formato: "Presencial", inicio: "13:30", local: "Lab. 4" },
    { titulo: "Inglês voltado para a computação", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Javascript", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Montagem e Funcionamento de Computadores", formato: "Presencial", inicio: "13:30", local: "Lab. Hardware" },
    { titulo: "React", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Virtualização e Introdução ao Kali Linux com foco em Pentest", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Blender para iniciantes (Online)", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Computação Forense", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Edição de Vídeos com DaVinci", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Introdução à Computação em Nuvem", formato: "Online", inicio: "19:00", local: "YouTube" },
  ],
  "06/11/2025": [
    { titulo: "Blender para iniciantes", formato: "Presencial", inicio: "13:30", local: "Lab. 4" },
    { titulo: "HTML e CSS", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Machine Learning: sistema de recomendação de jogos", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "React", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Virtualização e Introdução ao Kali Linux com foco em Pentest", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "A importância da privacidade na Internet e a Regulamentação do Uso de IA", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Computação Forense", formato: "Online", inicio: "19:00", local: "YouTube" },
    { titulo: "Edição de Vídeos com DaVinci", formato: "Online", inicio: "19:00", local: "YouTube" },
  ],
  "07/11/2025": [
    { titulo: ".Net e Angular", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Blender para iniciantes", formato: "Presencial", inicio: "13:30", local: "Lab. 4" },
    { titulo: "Campeonato de Jogos", formato: "Presencial", inicio: "13:30", local: "Lab. de Jogos / LAN" },
    { titulo: "Docker", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "HTML e CSS", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
    { titulo: "Linux aplicado à prática de programação", formato: "Presencial", inicio: "13:30", local: "Sala de aula" },
  ],
};

const badgeByFormato: Record<Formato, string> = {
  Presencial: "bg-amber-600/20 text-amber-300 border border-amber-500/30",
  Online: "bg-sky-600/20 text-sky-300 border border-sky-500/30",
  Palestra: "bg-violet-600/20 text-violet-300 border border-violet-500/30",
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

const Programacao: React.FC = () => {
  return (
    <section id="programacao" className="py-16 bg-encomp-darkGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center font-orbitron">
          <span className="text-encomp-green">&lt;</span>
          Programação
          <span className="text-encomp-green">/&gt;</span>
        </h2>

        <div className="space-y-10">
          {Object.entries(programacao).map(([data, eventos]) => {
            const grupos = groupByHora(eventos);
            const dia = weekdayPtBr(data);
            const titulo = `${dia.charAt(0).toUpperCase() + dia.slice(1)} — ${data}`;

            return (
              <div
                key={data}
                className="bg-encomp-dark-grey rounded-lg p-6 border border-encomp-green/30"
              >
                <h3 className="text-xl font-bold mb-4 text-encomp-green font-orbitron">
                  {titulo}
                </h3>

                <table className="min-w-full bg-encomp-dark border border-encomp-green/30 text-gray-200 rounded-lg">
                  <thead>
                    <tr className="bg-encomp-dark text-encomp-green">
                      <th className="p-3 border border-encomp-green/30 w-24 text-left">Horário</th>
                      <th className="p-3 border border-encomp-green/30 text-left">Atividades</th>
                      <th className="p-3 border border-encomp-green/30 w-32 text-left">Formato</th>
                      {/*
                        <th className="p-3 border border-encomp-green/30 w-40 text-left">Local</th>
                        ^^^ Descomente esta coluna quando quiser exibir os locais separadamente.
                      */}
                    </tr>
                  </thead>
                  <tbody>
                    {grupos.map(({ hora, itens }) => {
                      const formatosUnicos = Array.from(new Set(itens.map(i => i.formato)));
                      return (
                        <tr key={`${data}-${hora}`} className="hover:bg-encomp-dark transition align-top">
                          <td className="p-3 border border-encomp-green/20 font-semibold">
                            {hora}
                          </td>

                          <td className="p-3 border border-encomp-green/20">
                            <ul className="space-y-2">
                              {itens.map((ev, idx) => (
                                <li key={idx} className="flex flex-wrap items-center gap-2">
                                  <span>{ev.titulo}</span>
                                </li>
                              ))} 
                            </ul>
                          </td>

                          <td className="p-3 border border-encomp-green/20">
                            <div className="flex flex-wrap gap-2">
                              {formatosUnicos.map((f) => (
                                <span
                                  key={f}
                                  className={`px-2 py-1 rounded-full text-xs ${badgeByFormato[f as Formato]}`}
                                >
                                  {f}
                                </span>
                              ))}
                            </div>
                          </td>

                          {/*
                            <td className="p-3 border border-encomp-green/20">
                              <ul className="space-y-2">
                                {itens.map((ev, idx) => (
                                  <li key={idx}>{ev.local ?? "—"}</li>
                                ))}
                              </ul>
                            </td>
                            ^^^ Descomente este <td> junto com o <th> do cabeçalho para mostrar a coluna "Local".
                          */}
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Programacao;
