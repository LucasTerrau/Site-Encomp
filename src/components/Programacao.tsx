import React from "react";

const horarios = [
  "08:30 - 09:20",
  "09:20 - 10:10",
  "10:10 - 11:00",
  "11:00 - 11:20  (Coffee Break)",
  "11:20 - 12:10",
  "12:10 - 13:40  (Almoço)",
  "13:40 - 14:30",
  "14:30 - 14:50  (Coffee Break)",
  "14:50 - 15:40",
  "15:40 - 16:30",
];

const programacao = {
  "03/11/2025": [
    "Cérebro, Aprendizado e Mundo Digital",
    "Criação de um Chat Bot com Python",
    "Informática Básica",
    "Montagem e Funcionamento de Computadores",
    "Workshop de LangChain para desenvolvimento de aplicativos LLM para iniciantes em programação",
    "Palestras: Rildo Borges Duarte, Vinícius Otávio de Lima Moreira",
  ],
  "04/11/2025": [
    "Cérebro, Aprendizado e Mundo Digital",
    "Criação de um Chat Bot com Python",
    "Informática Básica",
    "Introdução ao React Native",
    "Montagem e Funcionamento de Computadores",
    "Visualização de Dados em Power BI",
    "Palestras: Nélito Bernardes Júnior, Professores do IFSULDEMINAS",
  ],
  "05/11/2025": [
    "Blender para iniciantes",
    "Inglês voltado para a computação",
    "Javascript",
    "Montagem e Funcionamento de Computadores",
    "React",
    "Virtualização e Introdução ao Kali Linux com foco em Pentest",
  ],
  "06/11/2025": [
    "Blender para iniciantes",
    "HTML e CSS",
    "Inglês voltado para a computação",
    "Machine Learning totalmente descomplicado: Criando um sistema de recomendação de jogos",
    "React",
    "Virtualização e Introdução ao Kali Linux com foco em Pentest",
  ],
  "07/11/2025": [
    "Blender para iniciantes",
    "Campeonato de Jogos",
    "Docker",
    "HTML e CSS",
    "Linux aplicado à prática de programação",
  ],
};

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
          {Object.entries(programacao).map(([data, eventos]) => (
            <div
              key={data}
              className="bg-encomp-dark-grey rounded-lg p-6 border border-encomp-green/30"
            >
              <h3 className="text-xl font-bold mb-4 text-encomp-green font-orbitron">
                {data}
              </h3>
              <table className="min-w-full bg-encomp-dark border border-encomp-green/30 text-gray-200 rounded-lg">
                <thead>
                  <tr className="bg-encomp-dark text-encomp-green">
                    <th className="p-3 border border-encomp-green/30">Horário</th>
                    <th className="p-3 border border-encomp-green/30">Atividade</th>
                  </tr>
                </thead>
                <tbody>
                  {horarios.map((hora, idx) => (
                    <tr key={idx} className="hover:bg-encomp-dark transition">
                      <td className="p-3 border border-encomp-green/20 font-semibold">
                        {hora}
                      </td>
                      <td className="p-3 border border-encomp-green/20">
                        {eventos[idx] || "Livre / Networking"}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programacao;
