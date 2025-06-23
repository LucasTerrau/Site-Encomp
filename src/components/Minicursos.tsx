import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export const minicursosData = [
  {
    id: "cloud-computing",
    titulo: 'Cloud Computing',
    speakers: 'Gabriel Bernardes e Rafael de Padua',
    imagem: '/imagens/Cloud.png',
    descricao: 'Aprenda os fundamentos da computação em nuvem e suas aplicações práticas.'
  },
  {
    id: "edicao-video",
    titulo: 'Edição de Vídeo com DaVinci Resolve',
    speakers: 'Matheus Terra Wachsmuth e Lucas Terra Wachsmuth',
    imagem: '/imagens/Davincimagia.png',
    descricao: 'Domine as técnicas de edição profissional com DaVinci Resolve.'
  },
  {
    id: "introducao-informatica",
    titulo: 'Introdução à Informática',
    speakers: 'Gabriel Xavier e Richard Rodrigues',
    imagem: '/imagens/ComputacaoBasicaHacking.png',
    descricao: 'Aprenda o básico sobre como manipular um computador e fundamentos da informática.'
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
                    objectPosition: 'center 40%'
                  }}
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 text-encomp-green font-orbitron text-center">
                  {minicurso.titulo}
                </h3>
                
                <div className="text-center mb-4">
                  <p className="text-sm text-gray-400 mb-1">Speakers:</p>
                  <p className="text-white font-medium">{minicurso.speakers}</p>
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
