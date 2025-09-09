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

const formatSessao = (iso: string) => {
  const d = new Date(iso);
  const dia = d.toLocaleDateString("pt-BR", { weekday: "short" });
  const data = d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit" });
  const hora = d.toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });
  return `${dia} • ${data} • ${hora}`;
};

const minicursosData: Minicurso[] = [
  {
    id: "externo-langchain",
    titulo: "Workshop de LangChain",
    speakers: "Adonis Gabriel Gonçalves Vinuto",
    imagem: "/imagens/Externo (Adonis) - Workshop de LangChain para desenvolvimento de aplicativos LLM para iniciantes em programação.png",
    descricao: "Orquestração de prompts, memória e ferramentas com LangChain para criar apps com modelos de linguagem — foco em iniciantes.",
    objectPosition: "center 50%",
    instituto: "Empresa Statum",
    vagas: 20,
    nivel: "Avançado",
    carga_horaria: 3,
    Data: ["2025-11-03T13:30:00"],
  },
  {
    id: "blender-online",
    titulo: "Blender para iniciantes (Online)",
    speakers: "Maria Clara Batista e Stanley Melo Costa",
    imagem: "/imagens/Modelagem_3D_Blender.jpg",
    descricao: "Versão online do curso de Blender: pipeline básico e exercícios guiados para praticar de casa.",
    objectPosition: "center 40%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: "ilimitado",
    nivel: "Intermediário",
    carga_horaria: 9,
    Data: ["2025-11-03T19:00:00", "2025-11-04T19:00:00", "2025-11-05T19:00:00"],
  },
  {
    id: "introducao-informatica",
    titulo: "Informática Básica",
    speakers: "Gabriel Silva Xavier e Richard Rodrigues Abreu",
    imagem: "/imagens/Informatica_Basica.jpg",
    descricao: "Fundamentos práticos: sistemas operacionais, organização de arquivos, segurança básica e produtividade no computador.",
    objectPosition: "center 40%",
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
    descricao: "Construa um chatbot do zero com Python. Conceitos de NLP, integração com APIs e bibliotecas úteis para conversação.",
    objectPosition: "center 45%",
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
    descricao: "Guia prático para escolher peças e configurações para estudo, trabalho ou jogos — custo/benefício e upgrade futuro.",
    objectPosition: "center 20%",
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
    descricao: "Neurociência aplicada ao estudo e à vida online: atenção, memória, foco e práticas para aprender melhor.",
    objectPosition: "center 45%",
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
    descricao: "Coleta, preservação e análise de evidências digitais. Técnicas e ferramentas para investigações em sistemas e redes.",
    objectPosition: "center 40%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: "ilimitado",
    nivel: "Avançado",
    carga_horaria: 6,
    Data: ["2025-11-03T19:00:00", "2025-11-05T19:00:00", "2025-11-06T19:00:00"],
  },
  {
    id: "deep-learning",
    titulo: "Introdução a Deep Learning em Python",
    speakers: "Gabriel Teixeira Bernardes e Pedro Gabriel dos Santos Barros",
    imagem: "/imagens/Deep_Learning.jpg",
    descricao: "Bases de redes neurais, treino e avaliação. Construindo modelos simples para visão e texto com bibliotecas populares.",
    objectPosition: "center 55%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 15,
    nivel: "Intermediário",
    carga_horaria: 6,
    Data: ["2025-11-03T19:00:00", "2025-11-04T19:00:00"],
  },
  {
    id: "criar-jogos-api",
    titulo: "Desenvolvimento de uma página de jogos com API",
    speakers: "Gabriel Martins e Yago Gabriel",
    imagem: "/imagens/API.png",
    descricao: "Ação especial voltada à divulgação e integração com a comunidade — oficinas rápidas e bate-papos com alunos.",
    objectPosition: "center 40%",
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
    descricao: "Modelagem simples, criação de dashboards, DAX introdutório e publicação de relatórios.",
    objectPosition: "center 40%",
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
    descricao: "Do zero ao app: componentes nativos, navegação, chamadas HTTP e publicação inicial.",
    objectPosition: "center 45%",
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
    imagem: "/imagens/Edicao_de_video_com_DaVinci_Resolve.jpg",
    descricao: "Fluxo de edição no DaVinci: corte, áudio, correção de cor e exportação. Dicas para vídeos acadêmicos e profissionais.",
    objectPosition: "center 40%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: "ilimitado",
    nivel: "Intermediário",
    carga_horaria: 8,
    Data: ["2025-11-04T19:00:00", "2025-11-05T19:00:00", "2025-11-06T19:00:00"],
  },
  {
    id: "html-css",
    titulo: "HTML e CSS",
    speakers: "Carla Freitas Gonçalves Drummond e João Victor Souza Soares",
    imagem: "/imagens/HTML_e_CSS.png",
    descricao: "Estruturas semânticas, flex/grid, responsividade e boas práticas para criar páginas bem organizadas.",
    objectPosition: "center 40%",
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
    descricao: "Primeiros passos com serviços de nuvem: contas, compute, storage, redes e implantação básica de aplicações.",
    objectPosition: "center 45%",
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
    descricao: "Leitura de documentação, vocabulário técnico, comunicação em times e boas práticas para estudo contínuo do idioma.",
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
    imagem: "/imagens/API.png",
    descricao: "Primeiros passos no JS: sintaxe, DOM, eventos e consumo de APIs — criando páginas web interativas.",
    objectPosition: "center 30%",
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
    descricao: "Modelagem, materiais, luzes e render. Fundamentos do Blender para criar seus primeiros projetos em 3D.",
    objectPosition: "center 40%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 12,
    nivel: "Intermediário",
    carga_horaria: 12,
    Data: ["2025-11-05T13:30:00", "2025-11-06T13:30:00", "2025-11-07T13:30:00"],
  },
  {
    id: "montagem-computadores",
    titulo: "Montagem e Funcionamento de Computadores",
    speakers: "Robson Ribeiro Filho e Tiago Requena Ferreira Sanchez",
    imagem: "/imagens/Montagem_e_Conserto_de_Computadores.jpg",
    descricao: "Identificação de componentes, montagem segura, instalação de SO, diagnóstico e manutenção preventiva.",
    objectPosition: "center 25%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 10,
    nivel: "Básico",
    carga_horaria: 7,
    Data: ["2025-11-03T13:30:00", "2025-11-04T13:30:00", "2025-11-05T13:30:00"],
  },
  {
    id: "react-basico",
    titulo: "React",
    speakers: "Davi Henrique Garcia Araújo e Layla Pimenta de Melo",
    imagem: "/imagens/React.jpg",
    descricao: "Componentes, props, estado e efeitos. Construindo interfaces modernas e organizando projetos React.",
    objectPosition: "center 30%",
    instituto: "Alunos-BCC IFSULDEMINAS Campus Passos",
    vagas: 15,
    nivel: "Avançado",
    carga_horaria: 8,
    Data: ["2025-11-05T13:30:00", "2025-11-06T13:30:00"],
  },
  {
    id: "kali-pentest",
    titulo: "Virtualização e Introdução ao Kali Linux com foco em Pentest",
    speakers: "Felipe Augusto Felicio Ignácio e Vitor Henrique Nascimento Almeida",
    imagem: "/imagens/Hacking_com_Kali_Linux.jpg",
    descricao: "Ambiente de laboratório com VirtualBox, instalação do Kali e execução de testes básicos de intrusão.",
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
    descricao: "Do zero ao recomendador: coleta/limpeza de dados, métricas de similaridade e avaliação simples do modelo.",
    objectPosition: "center 35%",
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
    descricao: "Competição organizada de e-sports no campus. Regras, chaveamento e acompanhamento das partidas.",
    objectPosition: "center 35%",
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
    descricao: "Fundamentos práticos de Linux: estrutura de diretórios, permissões, comandos essenciais, gerenciamento de pacotes e dicas de terminal para o dia a dia.",
    objectPosition: "center 40%",
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
    descricao: "Containerização na prática: imagens, containers, volumes e redes. Entenda como empacotar e distribuir aplicações de forma portátil e escalável.",
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
    descricao: "Construindo aplicações web modernas com back-end .NET e front-end Angular: rotas, componentes, APIs e integração.",
    objectPosition: "center 40%",
    instituto: "Inatel",
    vagas: 15,
    nivel: "Avançado",
    carga_horaria: 3,
    Data: ["2025-11-07T13:30:00"],
  },
];

const Minicursos = () => {
  const sorted = [...minicursosData].sort((a, b) => {
    const ta = a.Data.length ? +new Date(a.Data[0]) : Infinity;
    const tb = b.Data.length ? +new Date(b.Data[0]) : Infinity;
    return ta - tb;
  });

  return (
    <section id="minicursos" className="py-16 bg-encomp-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-orbitron">
          <span className="text-encomp-green">&lt;</span>
          Minicursos
          <span className="text-encomp-green">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sorted.map((minicurso) => (
            <Card
              key={minicurso.id}
              className="bg-encomp-darkGray border border-encomp-green/20 hover:border-encomp-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-encomp-green/20 overflow-hidden group"
            >
              <div className="h-64 relative overflow-hidden bg-encomp-dark/50">
                <img
                  src={encodeURI(minicurso.imagem)}
                  alt={minicurso.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{ width: "100%", height: "100%", objectPosition: minicurso.objectPosition || "center" }}
                />
              </div>

              <CardContent className="p-6 flex flex-col justify-between min-h-[430px]">
                <h3 className="text-xl font-bold mb-2 text-encomp-green font-orbitron text-center">
                  {minicurso.titulo}
                </h3>

                <div className="text-center mb-3">
                  <p className="text-sm text-gray-400 mb-1">
                    {minicurso.speakers.includes(" e ") || minicurso.speakers.includes(",") ? "Ministrantes:" : "Ministrante:"}
                  </p>
                  <p className="text-white font-medium">{minicurso.speakers}</p>

                  <div className="mt-2 flex items-center justify-center gap-2 flex-wrap">
                    <span className="inline-block bg-encomp-green/10 text-encomp-green text-xs px-2 py-1 rounded-full">
                      {minicurso.instituto}
                    </span>
                  </div>

                  <div className="mt-3 space-y-1 text-sm md:text-base text-gray-300">
                    <div><span className="text-encomp-green/80 font-semibold">Carga Horária:</span> {minicurso.carga_horaria}h</div>
                    <div>
                      <span className="text-encomp-green/80 font-semibold">Vagas:</span>{" "}
                      {minicurso.vagas === "ilimitado" ? "ilimitado" : minicurso.vagas === "Exclusivo PartiuIF" ? "Exclusivo PartiuIF" : minicurso.vagas}
                    </div>
                    <div><span className="text-encomp-green/80 font-semibold">Nível:</span> {minicurso.nivel}</div>
                  </div>

                  <div className="mt-4">
                    <p className="text-sm text-gray-400 mb-1">Datas e horários</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {minicurso.Data.map((s) => (
                        <span key={s} className="inline-block bg-encomp-green/10 text-gray-200 text-xs md:text-sm px-2 py-1 rounded-full">
                          {formatSessao(s)}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                  {minicurso.descricao}
                </p>

                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    onClick={(e) => {
                      e.preventDefault();
                      const curso = minicurso.titulo;
                      const nivel = minicurso.nivel as string;
                      const url = new URL(window.location.href);
                      url.searchParams.set("curso", curso);
                      url.searchParams.set("nivel", nivel);
                      window.history.replaceState({}, "", `${url.pathname}${url.search}#inscricao`);
                      window.dispatchEvent(new CustomEvent("prefill-inscricao", { detail: { curso, nivel } }));
                      document.getElementById("inscricao")?.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="bg-encomp-green/10 text-encomp-green border-encomp-green/30 hover:bg-encomp-green hover:text-black transition-all font-semibold"
                  >
                    Inscreva-se já!
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Minicursos;
export { minicursosData };
