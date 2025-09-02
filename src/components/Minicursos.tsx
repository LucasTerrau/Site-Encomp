import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const minicursosData = [
  {
    id: "cloud-computing",
    titulo: 'Cloud Computing',
    speakers: 'Gabriel Bernardes e Rafael de Padua',
    imagem: '/imagens/Cloud.png',
    descricao: 'Entenda os conceitos fundamentais da computação em nuvem e descubra como utilizá-la para armazenar, processar e escalar aplicações de forma eficiente.',
    objectPosition: "center 35%",
    instituto: "Alunos-BCC",
  },
  {
    id: "edicao-video",
    titulo: 'Edição de Vídeo com DaVinci Resolve',
    speakers: 'Matheus Terra Wachsmuth e Lucas Terra Wachsmuth',
    imagem: '/imagens/Davincimagia.png',
    descricao: 'Explore as ferramentas e técnicas de edição profissional de vídeo utilizando o DaVinci Resolve, um dos softwares mais completos do mercado audiovisual.',
    objectPosition: "center 40%",
    instituto: "Alunos-BCC",
  },
  {
    id: "introducao-informatica",
    titulo: 'Introdução à Informática',
    speakers: 'Gabriel Xavier e Richard Rodrigues',
    imagem: '/imagens/ComputacaoBasicaHacking.png',
    descricao: 'Ideal para iniciantes, este minicurso apresenta os principais conceitos da informática, como uso de sistemas operacionais, organização de arquivos e navegação segura na internet.',
    objectPosition: "center 40%",
    instituto: "Alunos-BCC",
  },
  {
    id: "chatbot-python",
    titulo: 'Criação de Chatbots com Python',
    speakers: 'Rafael de Padua e Rômulo Vargas',
    imagem: '/imagens/Chatbot_Python.jpg',
    descricao: 'Aprenda passo a passo como desenvolver chatbots interativos com Python, utilizando bibliotecas modernas para automatizar conversas e responder usuários de forma inteligente.',
    objectPosition: "center 45%",
    instituto: "Alunos-BCC",
  },
  {
    id: "computacao-forense",
    titulo: 'Computação Forense',
    speakers: 'Helen Enes e Kaiki Alvarenga',
    imagem: '/imagens/Computacao_Forense.jpg',
    descricao: 'Descubra como especialistas investigam crimes digitais. Entenda como identificar, preservar e analisar evidências em dispositivos e redes de forma ética e técnica.',
    objectPosition: "center 40%",
    instituto: "Alunos-BCC",
  },
  {
    id: "deep-learing",
    titulo: 'Deep Learning',
    speakers: 'Pedro Gabriel e Gabriel Bernardes',
    imagem: '/imagens/Deep_Learning.png',
    descricao: 'Mergulhe nos conceitos básicos do Deep Learning, aprendendo como redes neurais artificiais funcionam e são aplicadas em áreas como reconhecimento de imagens e linguagem natural.',
    objectPosition: "center 55%",
    instituto: "Alunos-BCC",
  },
  {
    id: "ingles-computacao",
    titulo: "Inglês na Computação",
    speakers: "Enzo Lessa e Victor Hugo",
    imagem: "/imagens/Ingles.jpg",
    descricao: "Aprenda como o inglês é utilizado no dia a dia da computação, desde a leitura de documentações até a comunicação em projetos internacionais.",
    objectPosition: "center 25%",
    instituto: "Alunos-BCC",
  },
  {
    id: "introducao-javascript",
    titulo: "Introdução ao JavaScript",
    speakers: "Pedro Miranda e Gabriel Canela",
    imagem: "/imagens/Introducao_ao_java_script.jpeg",
    descricao: "Conheça os conceitos básicos do JavaScript e dê os primeiros passos no desenvolvimento de páginas web interativas e dinâmicas.",
    objectPosition: "center 30%",
    instituto: "Alunos-BCC",
  },
  {
    id: "modelagem-3d-blender",
    titulo: "Modelagem 3D com Blender",
    speakers: "Maria Clara e Stanley Melo",
    imagem: "/imagens/Modelagem_3D_Blender.jpg",
    descricao: "Descubra o mundo da modelagem 3D utilizando o Blender. Crie seus primeiros modelos, aprenda técnicas essenciais e explore ferramentas de animação.",
    objectPosition: "center 40%",
    instituto: "Alunos-BCC",
  },
  {
    id: "montagem-conserto-computadores",
    titulo: "Montagem e Conserto de Computadores",
    speakers: "Tiago Raquena e Robson Ribeiro",
    imagem: "/imagens/Montagem_e_Conserto_de_Computadores.jpg",
    descricao: "Aprenda na prática a montar, configurar e realizar manutenção em computadores, entendendo cada peça e seu funcionamento.",
    objectPosition: "center 25%",
    instituto: "Alunos-BCC",
  },
  {
    id: "react-basico",
    titulo: "React Básico",
    speakers: "Davi Henrique e Layla Pimenta",
    imagem: "/imagens/React.png",
    descricao: "Introdução ao desenvolvimento de interfaces modernas com React. Entenda os conceitos de componentes, estados e propriedades para criar aplicações web dinâmicas.",
    objectPosition: "center 30%",
    instituto: "Alunos-BCC",
  },
  {
    id: "docker",
    titulo: "Docker",
    speakers: "Luciano Davilla",
    imagem: "/imagens/Docker_LucianoDavilla.jpg",
    descricao: "teste",
    objectPosition: "center 60%",
    instituto: "Alunos-BCC",
  },
];

const Minicursos = () => {
  return (
    <section id="minicursos" className="py-16 bg-encomp-dark">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-orbitron">
          <span className="text-encomp-green">&lt;</span>
          Minicursos
          <span className="text-encomp-green">/&gt;</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {minicursosData.map((minicurso, index) => (
            <Card 
              key={index} 
              className="bg-encomp-darkGray border border-encomp-green/20 hover:border-encomp-green/50 transition-all duration-300 hover:shadow-lg hover:shadow-encomp-green/20 overflow-hidden group"
            >
              <div className="h-64 relative overflow-hidden bg-encomp-dark/50">
                <img 
                  src={minicurso.imagem} 
                  alt={minicurso.titulo}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectPosition: minicurso.objectPosition || "center"
                  }}
                />
              </div>
              
              <CardContent className="p-6 flex flex-col justify-between min-h-[350px]">
                <h3 className="text-xl font-bold mb-2 text-encomp-green font-orbitron text-center">
                  {minicurso.titulo}
                </h3>
                
                <div className="text-center mb-3">
                  <p className="text-sm text-gray-400 mb-1">
                    {minicurso.speakers.includes(" e ") || minicurso.speakers.includes(",")
                      ? "Ministrantes:"
                      : "Ministrante:"}
                  </p>
                  <p className="text-white font-medium">{minicurso.speakers}</p>
                  <span className="inline-block bg-encomp-green/10 text-encomp-green text-xs px-2 py-1 rounded-full mt-2">
                    Instituição: {minicurso.instituto}
                  </span>
                </div>
                
                <p className="text-gray-300 text-sm leading-relaxed mb-4 text-center">
                  {minicurso.descricao}
                </p>

                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    className="bg-encomp-green/10 text-encomp-green border-encomp-green/30 hover:bg-encomp-green hover:text-black transition-all font-semibold"
                  >
                    Em breve mais informações
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
