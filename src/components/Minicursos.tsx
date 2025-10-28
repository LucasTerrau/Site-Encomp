import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type Nivel = "Básico" | "Intermediário" | "Avançado" | "Iniciante";

type Minicurso = {
  id: string;
  titulo: string;
  speakers: string;
  imagem: string;
  descricao: string;
  objectPosition?: string;
  instituto: string;
  vagas?: number | "ilimitado" | "Exclusivo PartiuIF";
  nivel: Nivel;
  carga_horaria: number;
  Data: string[];
};

const uniqueWeekdaysInOrder = (isos: string[]) => {
  if (!Array.isArray(isos) || isos.length === 0) return [];

  const monthAbbr = [
    "jan",
    "fev",
    "mar",
    "abr",
    "mai",
    "jun",
    "jul",
    "ago",
    "set",
    "out",
    "nov",
    "dez",
  ];

  const ordered = [...isos]
    .map((s) => {
      const d = new Date(s);
      return isNaN(d.getTime()) ? null : d;
    })
    .filter((d): d is Date => d !== null)
    .sort((a, b) => a.getTime() - b.getTime());

  const seen = new Set<string>();
  const result: string[] = [];

  ordered.forEach((d) => {
    const weekday = d
      .toLocaleDateString("pt-BR", { weekday: "long" })
      .replace(/^(.)/, (m) => m.toUpperCase());

    const day = String(d.getDate()).padStart(2, "0");
    const month = monthAbbr[d.getMonth()];

    const label = `${weekday} (${day}/${month})`;

    if (!seen.has(label)) {
      seen.add(label);
      result.push(label);
    }
  });

  return result;
};

const minicursosData: Minicurso[] = [
  {
    id: "externo-langchain",
    titulo: "Workshop de LangChain",
    speakers: "Adonis Gabriel Gonçalves Vinuto",
    imagem:
      "/imagens/Externo (Adonis) - Workshop de LangChain para desenvolvimento de aplicativos LLM para iniciantes em programação.png",
    descricao:
      "Orquestração de prompts, memória e ferramentas com LangChain para criar apps com modelos de linguagem — foco em iniciantes.",
    objectPosition: "center 30%",
    instituto: "Empresa Statum",
    vagas: 20,
    nivel: "Avançado",
    carga_horaria: 3,
    Data: ["2025-11-03T13:30:00"],
  },
  {
    id: "blender-online",
    titulo: "Blender para iniciantes",
    speakers: "Maria Clara Batista e Stanley Melo Costa",
    imagem: "/imagens/Modelagem_3D_Blender.jpg",
    descricao:
      "Versão online do curso de Blender: pipeline básico e exercícios guiados para praticar de casa.",
    objectPosition: "center 30%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: "ilimitado",
    nivel: "Intermediário",
    carga_horaria: 9,
    Data: [
      "2025-11-03T19:00:00",
      "2025-11-04T19:00:00",
      "2025-11-05T19:00:00",
    ],
  },
  {
    id: "introducao-informatica",
    titulo: "Informática Básica",
    speakers: "Gabriel Silva Xavier e Richard Rodrigues Abreu",
    imagem: "/imagens/Informatica_Basica.jpg",
    descricao:
      "Fundamentos práticos: sistemas operacionais, organização de arquivos, segurança básica e produtividade no computador.",
    objectPosition: "center 30%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 20,
    nivel: "Iniciante",
    carga_horaria: 6,
    Data: ["2025-11-03T13:30:00", "2025-11-04T13:30:00"],
  },
  {
    id: "chatbot-python",
    titulo: "Criação de Chatbots com Python",
    speakers: "Rafael de Pádua e Rômulo Rocha Vargas",
    imagem: "/imagens/Chatbot_Python.jpg",
    descricao:
      "Construa um chatbot do zero com Python. Conceitos de NLP, integração com APIs e bibliotecas úteis para conversação.",
    objectPosition: "center 35%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 15,
    nivel: "Intermediário",
    carga_horaria: 6,
    Data: ["2025-11-03T13:30:00", "2025-11-04T13:30:00"],
  },
  {
    id: "como-adquirir-computador",
    titulo: "Como adquirir um computador",
    speakers: "Lucas Terra Wachsmuth e Matheus Terra Wachsmuth",
    imagem: "/imagens/Como_Adquirir_um_Computador.jpg",
    descricao:
      "Guia prático para escolher peças e configurações para estudo, trabalho ou jogos — custo/benefício e upgrade futuro.",
    objectPosition: "center 15%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: "ilimitado",
    nivel: "Iniciante",
    carga_horaria: 3,
    Data: ["2025-11-03T19:00:00"],
  },
  {
    id: "cerebro-aprendizado-mundo-digital",
    titulo: "Cérebro, Aprendizado e Mundo Digital",
    speakers: "Mariana Eliane Teixeira",
    imagem: "/imagens/Cerebro.png",
    descricao:
      "Neurociência aplicada ao estudo e à vida online: atenção, memória, foco e práticas para aprender melhor.",
    objectPosition: "center 40%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 25,
    nivel: "Básico",
    carga_horaria: 6,
    Data: ["2025-11-03T13:30:00", "2025-11-04T13:30:00"],
  },
  {
    id: "computacao-forense",
    titulo: "Computação Forense",
    speakers: "Helen Enes Dessa e Kaiki Alvarenga de Souza",
    imagem: "/imagens/Computacao_Forense.jpg",
    descricao:
      "Coleta, preservação e análise de evidências digitais. Técnicas e ferramentas para investigações em sistemas e redes.",
    objectPosition: "center 35%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: "ilimitado",
    nivel: "Avançado",
    carga_horaria: 6,
    Data: [
      "2025-11-03T19:00:00",
      "2025-11-05T19:00:00",
      "2025-11-06T19:00:00",
    ],
  },
  {
    id: "deep-learning",
    titulo: "Introdução a Deep Learning em Python",
    speakers: "Gabriel Teixeira Bernardes e Pedro Gabriel dos Santos Barros",
    imagem: "/imagens/Deep_Learning.jpg",
    descricao:
      "Bases de redes neurais, treino e avaliação. Construindo modelos simples para visão e texto com bibliotecas populares.",
    objectPosition: "center 45%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: "ilimitado",
    nivel: "Intermediário",
    carga_horaria: 6,
    Data: ["2025-11-03T19:00:00", "2025-11-04T19:00:00"],
  },
  {
    id: "criar-jogos-api",
    titulo: "Desenvolvimento de uma página de jogos com API",
    speakers: "Gabriel Martins e Yago Gabriel",
    imagem: "/imagens/API.png",
    descricao:
      "Crie, do zero, uma página que consome uma API pública de jogos: listagem, busca e detalhes. Passo a passo acessível para iniciantes, com boas práticas e integração real com HTTP.",
    objectPosition: "center 25%",
    instituto: "IFSULDEMINAS Campus Passos",
    vagas: "Exclusivo PartiuIF",
    nivel: "Iniciante",
    carga_horaria: 6,
    Data: ["2025-11-04T13:30:00", "2025-11-05T13:30:00"],
  },
  {
    id: "power-bi",
    titulo: "Visualização de Dados em Power BI",
    speakers: "Ricardo Morsoleto",
    imagem: "/imagens/PowerBI.jpg",
    descricao:
      "Modelagem simples, criação de dashboards, DAX introdutório e publicação de relatórios.",
    objectPosition: "center 30%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 15,
    nivel: "Básico",
    carga_horaria: 3,
    Data: ["2025-11-04T13:30:00"],
  },
  {
    id: "react-native",
    titulo: "Introdução ao React Native",
    speakers: "Jean Francisco da Silva, Max Mohamed Freitas e Pedro Santana Miranda",
    imagem: "/imagens/ReactNative.jpg",
    descricao:
      "Do zero ao app: componentes nativos, navegação, chamadas HTTP e publicação inicial.",
    objectPosition: "center 25%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 20,
    nivel: "Intermediário",
    carga_horaria: 4,
    Data: ["2025-11-04T13:30:00"],
  },
  {
    id: "edicao-video",
    titulo: "Edição de Vídeo com DaVinci Resolve",
    speakers: "Matheus Terra Wachsmuth e Lucas Terra Wachsmuth",
    imagem:
      "/imagens/Edicao_de_video_com_DaVinci_Resolve.jpg",
    descricao:
      "Fluxo de edição no DaVinci: corte, áudio, correção de cor e exportação. Dicas para vídeos acadêmicos e profissionais.",
    objectPosition: "center 40%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: "ilimitado",
    nivel: "Intermediário",
    carga_horaria: 8,
    Data: [
      "2025-11-04T19:00:00",
      "2025-11-05T19:00:00",
      "2025-11-06T19:00:00",
    ],
  },
  {
    id: "html-css",
    titulo: "HTML e CSS",
    speakers:
      "Carla Freitas Gonçalves Drummond e João Victor Souza Soares",
    imagem: "/imagens/HTML_e_CSS.png",
    descricao:
      "Estruturas semânticas, flex/grid, responsividade e boas práticas para criar páginas bem organizadas.",
    objectPosition: "center 35%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 20,
    nivel: "Básico",
    carga_horaria: 6,
    Data: ["2025-11-06T13:30:00", "2025-11-07T13:30:00"],
  },
  {
    id: "computacao-nuvem",
    titulo: "Introdução à Computação em Nuvem",
    speakers: "Gabriel Teixeira Bernardes e Rafael de Pádua Oliveira",
    imagem: "/imagens/Computacao_em_Nuvem.jpg",
    descricao:
      "Primeiros passos com serviços de nuvem: contas, compute, storage, redes e implantação básica de aplicações.",
    objectPosition: "center 30%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: "ilimitado",
    nivel: "Básico",
    carga_horaria: 3,
    Data: ["2025-11-05T19:00:00"],
  },
  {
    id: "ingles-computacao",
    titulo: "Inglês voltado para a Computação",
    speakers: "Enzo Lessa e Vitor Hugo Souza Silva",
    imagem: "/imagens/Ingles.jpg",
    descricao:
      "Leitura de documentação, vocabulário técnico, comunicação em times e boas práticas para estudo contínuo do idioma.",
    objectPosition: "center 25%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 15,
    nivel: "Básico",
    carga_horaria: 3,
    Data: ["2025-11-05T13:30:00"],
  },
  {
    id: "introducao-javascript",
    titulo: "Introdução ao JavaScript",
    speakers: "Gabriel Oliveira Canela e Pedro Santana Miranda",
    imagem: "/imagens/Introducao_ao_java_script.jpeg",
    descricao:
      "Primeiros passos no JS: sintaxe, DOM, eventos e consumo de APIs — criando páginas web interativas.",
    objectPosition: "center 25%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 20,
    nivel: "Básico",
    carga_horaria: 3,
    Data: ["2025-11-05T13:30:00"],
  },
  {
    id: "modelagem-3d-blender",
    titulo: "Blender para iniciantes (Presencial)",
    speakers: "Maria Clara Batista e Stanley Melo Costa",
    imagem: "/imagens/Modelagem_3D_Blender.jpg",
    descricao:
      "Modelagem, materiais, luzes e render. Fundamentos do Blender para criar seus primeiros projetos em 3D.",
    objectPosition: "center 30%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 12,
    nivel: "Intermediário",
    carga_horaria: 12,
    Data: [
      "2025-11-05T13:30:00",
      "2025-11-06T13:30:00",
      "2025-11-07T13:30:00",
    ],
  },
  {
    id: "montagem-computadores",
    titulo: "Montagem e Funcionamento de Computadores",
    speakers: "Robson Ribeiro Filho e Tiago Requena Ferreira Sanchez",
    imagem: "/imagens/Montagem_e_Conserto_de_Computadores.jpg",
    descricao:
      "Identificação de componentes, montagem segura, instalação de SO, diagnóstico e manutenção preventiva.",
    objectPosition: "center 20%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 10,
    nivel: "Básico",
    carga_horaria: 7,
    Data: [
      "2025-11-03T13:30:00",
      "2025-11-04T13:30:00",
      "2025-11-05T13:30:00",
    ],
  },
  {
    id: "react-basico",
    titulo: "React",
    speakers: "Davi Henrique Garcia Araújo e Layla Pimenta de Melo",
    imagem: "/imagens/React.jpg",
    descricao:
      "Componentes, props, estado e efeitos. Construindo interfaces modernas e organizando projetos React.",
    objectPosition: "center 35%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 15,
    nivel: "Avançado",
    carga_horaria: 8,
    Data: ["2025-11-05T13:30:00", "2025-11-06T13:30:00"],
  },
  {
    id: "kali-pentest",
    titulo: "Virtualização e Introdução ao Kali Linux com foco em Pentest",
    speakers:
      "Felipe Augusto Felicio Ignácio e Vitor Henrique Nascimento Almeida",
    imagem: "/imagens/Hacking_com_Kali_Linux.jpg",
    descricao:
      "Ambiente de laboratório com VirtualBox, instalação do Kali e execução de testes básicos de intrusão.",
    objectPosition: "center 45%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 20,
    nivel: "Avançado",
    carga_horaria: 6,
    Data: ["2025-11-05T13:30:00", "2025-11-06T13:30:00"],
  },
  {
    id: "recomendacao-jogos-ml",
    titulo: "Machine Learning descomplicado: sistema de recomendação de jogos",
    speakers: "Ricardo Morsoleto",
    imagem: "/imagens/Machine_Learning (2).jpg",
    descricao:
      "Do zero ao recomendador: coleta/limpeza de dados, métricas de similaridade e avaliação simples do modelo.",
    objectPosition: "center 25%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 15,
    nivel: "Intermediário",
    carga_horaria: 3,
    Data: ["2025-11-06T13:30:00"],
  },
  {
    id: "campeonato-jogos",
    titulo: "Campeonato de Jogos",
    speakers: "Kaique Gabriel de Silva Souza e Pedro Arthur Faria Costa",
    imagem: "/imagens/Campeonato_de_Jogos.jpg",
    descricao:
      "Campeonato em duplas de League of Legends, regras, chaveamento e acompanhamento de partidas.",
    objectPosition: "center 25%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 16,
    nivel: "Básico",
    carga_horaria: 6,
    Data: ["2025-11-07T13:30:00"],
  },
  {
    id: "externo-linux",
    titulo: "Linux aplicado à prática de programação",
    speakers: "João Fernando",
    imagem: "/imagens/Externo (João Fernando) - Linux.png",
    descricao:
      "Fundamentos práticos de Linux: estrutura de diretórios, permissões, comandos essenciais, gerenciamento de pacotes e dicas de terminal para o dia a dia.",
    objectPosition: "center 30%",
    instituto: "Ex Aluno / UFLA São Seb. Paraíso",
    vagas: 20,
    nivel: "Intermediário",
    carga_horaria: 3,
    Data: ["2025-11-07T13:30:00"],
  },
  {
    id: "externo-docker",
    titulo: "Docker",
    speakers: "Luciano Montanha",
    imagem: "/imagens/Externo (Luciano) - Docker.png",
    descricao:
      "Containerização na prática: imagens, containers, volumes e redes. Entenda como empacotar e distribuir aplicações de forma portátil e escalável.",
    objectPosition: "center 55%",
    instituto: "IBM",
    vagas: 25,
    nivel: "Avançado",
    carga_horaria: 3,
    Data: ["2025-11-07T13:30:00"],
  },
  {
    id: "externo-dotnet-angular",
    titulo: ".NET e Angular",
    speakers: "Gabriel Reis de Bragança Oliveira",
    imagem: "/imagens/Externo (Gabriel) - .NET e Angular.png",
    descricao:
      "Construindo aplicações web modernas com back-end .NET e front-end Angular: rotas, componentes, APIs e integração.",
    objectPosition: "center 40%",
    instituto: "Inatel",
    vagas: 15,
    nivel: "Avançado",
    carga_horaria: 3,
    Data: ["2025-11-07T13:30:00"],
  },
  {
    id: "privacidade-ia-online",
    titulo:
      "A importância da privacidade na Internet e a Regulamentação do Uso de IA nos ambientes Virtuais",
    speakers: "Gabriel Oliveira Canela",
    imagem:
      "/imagens/Interno (Gabriel Canela) - A importância da privacidade na Internet e a Regulamentação do Uso de IA nos ambientes Virtuais.jpg",
    descricao:
      "Entenda por que a privacidade importa, boas práticas para navegar com segurança e um panorama da regulamentação do uso de IA em ambientes virtuais.",
    objectPosition: "center 0%",
    instituto: "Público Geral",
    vagas: "ilimitado",
    nivel: "Iniciante",
    carga_horaria: 2,
    Data: ["2025-11-06T19:00:00"],
  },
];

const Minicursos: React.FC = () => {
  const levelOrder: Nivel[] = ["Iniciante", "Básico", "Intermediário", "Avançado"];

  // Cursos com vagas preenchidas — exibem banner, abaixam badge e desativam o botão
  const excedenteIds = React.useMemo(
    () =>
      new Set<string>([
        "modelagem-3d-blender",   // Blender Presencial
        "html-css",               // HTML e CSS
        "introducao-javascript",  // JavaScript
        "introducao-informatica", // Informática Básica
        "ingles-computacao",      // Inglês
        "montagem-computadores",  // Montagem de PC
        "cerebro-aprendizado-mundo-digital",
        "recomendacao-jogos-ml",  // Machine Learning (recomendação)
        "criar-jogos-api",        // Página de jogos com API
        "chatbot-python",         // Chatbots com Python
        "power-bi",
        "react-basico"
      ]),
    []
  );

  const coursesByLevel = minicursosData.reduce((acc, course) => {
    if (!acc[course.nivel]) acc[course.nivel] = [];
    acc[course.nivel].push(course);
    return acc;
  }, {} as Record<Nivel, Minicurso[]>);

  const firstLevelWithCourses =
    levelOrder.find((l) => (coursesByLevel[l]?.length || 0) > 0) || "Básico";
  const [activeLevel, setActiveLevel] = React.useState<Nivel>(firstLevelWithCourses);

  const activeCourses = coursesByLevel[activeLevel] || [];

  return (
    <section id="minicursos" className="py-16 bg-encomp-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-orbitron">
          <span className="text-encomp-green">&lt;</span>
          Minicursos
          <span className="text-encomp-green">/&gt;</span>
        </h2>

        {/* Seção: Lista de Inscritos (PDF) */}
        <div className="mb-8 flex items-center justify-center">
          <a
            href="https://drive.google.com/file/d/1yNkd7dljfaJlh54_3YN9QuY5Pebn05yL/view?usp=drive_link"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-md border border-encomp-green/40 px-4 py-2 text-sm font-semibold text-encomp-green hover:bg-encomp-green hover:text-black transition-colors"
            title="Abrir a Lista de Inscritos (PDF)"
          >
            📄 Ver Lista de Inscritos (PDF)
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {levelOrder.map((level) => (
            <button
              key={level}
              onClick={() => setActiveLevel(level)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeLevel === level
                  ? "bg-encomp-green text-black"
                  : "bg-encomp-green/10 text-encomp-green border border-encomp-green/30 hover:bg-encomp-green/20"
              }`}
            >
              {level} ({coursesByLevel[level]?.length || 0})
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeCourses.map((minicurso) => {
            const isOnline = minicurso.vagas === "ilimitado";
            const isBlenderPresencialFull = minicurso.id === "modelagem-3d-blender";
            const isExcedente = excedenteIds.has(minicurso.id);

            const badgeClass = isOnline
              ? "bg-sky-500 text-white border-sky-300"
              : "bg-amber-400 text-black border-amber-200";

            // Abaixar badge quando há banner (excedente) ou no Blender presencial (mantido)
            const badgeTopClass = (isExcedente || isBlenderPresencialFull)
              ? "top-10 md:top-12"
              : "top-3";

            const diasSemana = uniqueWeekdaysInOrder(minicurso.Data);

            return (
              <Card
                key={minicurso.id}
                className="bg-encomp-darkGray border border-encomp-green/20 hover:border-encomp-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-encomp-green/20 overflow-hidden group"
              >
                <div className="relative h-64 md:h-80 overflow-hidden bg-encomp-dark/50">
                  {/* Banner de VAGAS PREENCHIDAS */}
                  {isExcedente && (
                    <div className="absolute inset-x-0 top-0 z-20">
                      <div
                        className="bg-rose-600 text-white text-[11px] md:text-xs font-extrabold tracking-wide text-center py-1"
                        aria-label="Vagas preenchidas"
                        title="Vagas preenchidas"
                      >
                        VAGAS PREENCHIDAS
                      </div>
                    </div>
                  )}

                  <img
                    src={encodeURI(minicurso.imagem)}
                    alt={minicurso.titulo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectPosition: minicurso.objectPosition || "center",
                    }}
                  />

                  <span
                    className={`absolute ${badgeTopClass} left-3 px-3 py-1 rounded-md text-[11px] font-bold border ${badgeClass} shadow`}
                    title={isOnline ? "Este curso é online" : "Este curso é presencial"}
                  >
                    {isOnline ? "ONLINE" : "PRESENCIAL"}
                  </span>
                </div>

                <CardContent className="p-3 md:p-4 flex flex-col justify-between min-h-[290px] md:min-h-[320px]">
                  <h3 className="text-lg md:text-xl font-bold mb-1 text-encomp-green font-orbitron text-center leading-snug">
                    {minicurso.titulo}
                  </h3>

                  <div className="text-center mb-2">
                    <p className="text-[13px] text-gray-300">
                      <span className="text-gray-400 mr-1">
                        {minicurso.speakers.includes(" e ") || minicurso.speakers.includes(",")
                          ? "Ministrantes:"
                          : "Ministrante:"}
                      </span>
                      <span className="font-medium text-white">{minicurso.speakers}</span>
                    </p>

                    <div className="mt-1 flex items-center justify-center gap-2 flex-wrap">
                      <span className="inline-block bg-encomp-green/10 text-encomp-green text-[11px] px-2 py-0.5 rounded-full">
                        {minicurso.instituto}
                      </span>
                    </div>

                    <div className="mt-2 text-[13px] text-gray-300">
                      <span className="text-encomp-green/80 font-semibold">Carga:</span>{" "}
                      {minicurso.carga_horaria}h
                      <span className="mx-2 opacity-50">•</span>
                      <span className="text-encomp-green/80 font-semibold">Vagas:</span>{" "}
                      {minicurso.vagas === "ilimitado"
                        ? "ilimitado"
                        : minicurso.vagas === "Exclusivo PartiuIF"
                        ? "Exclusivo PartiuIF"
                        : minicurso.vagas}
                    </div>

                    <div className="mt-2">
                      <p className="text-[11px] text-gray-400 mb-1">Dias da semana</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {diasSemana.map((dia) => (
                          <span
                            key={dia}
                            className="inline-block bg-encomp-green/10 text-gray-200 text-[11px] px-2 py-0.5 rounded-full"
                          >
                            {dia}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-[13px] leading-relaxed mb-3 text-center line-clamp-3">
                    {minicurso.descricao}
                  </p>

                  {/* Botão que navega, seta params e dispara evento de pré-preenchimento */}
                  <div className="flex justify-center">
                    <Button
                      variant="outline"
                      onClick={(e) => {
                        e.preventDefault();
                        if (isExcedente) return; // bloqueia ação se estiver cheio
                        const curso = minicurso.titulo;
                        const nivel = minicurso.nivel as string;
                        const url = new URL(window.location.href);
                        url.searchParams.set("curso", curso);
                        url.searchParams.set("nivel", nivel);
                        window.history.replaceState({}, "", `${url.pathname}${url.search}#inscricao`);
                        window.dispatchEvent(
                          new CustomEvent("prefill-inscricao", { detail: { curso, nivel } })
                        );
                        document.getElementById("inscricao")?.scrollIntoView({
                          behavior: "smooth",
                          block: "start",
                        });
                      }}
                      disabled={isExcedente}
                      className={`transition-all font-semibold py-1.5 px-3 text-sm ${
                        isExcedente
                          ? "bg-gray-600 text-white cursor-not-allowed border border-transparent"
                          : "bg-encomp-green/10 text-encomp-green border-encomp-green/30 hover:bg-encomp-green hover:text-black"
                      }`}
                    >
                      {isExcedente ? "Inscrições Encerradas" : "Inscreva-se já!"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Minicursos;
export { minicursosData };
