
import React from 'react';
import { MapPin, History, School } from 'lucide-react';

const About = () => {
  return (
    <section id="historia" className="py-16 bg-encomp-darkGray">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12">
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron text-center">
              <span className="text-encomp-green">&lt;</span>
              História do ENCOMP
              <span className="text-encomp-green">/&gt;</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <div className="flex items-start">
                  <History className="text-encomp-green mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    O Encontro de Computação (ENCOMP) surgiu em 2015 como uma iniciativa dos estudantes e professores do curso de Ciência da Computação do IFSULDEMINAS - Campus Passos, com o objetivo de aproximar a comunidade acadêmica do mercado de trabalho e das tendências tecnológicas.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <School className="text-encomp-green mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Ao longo dos anos, o evento cresceu e se consolidou como uma das principais conferências de tecnologia da região, atraindo participantes de diversas instituições e profissionais renomados do setor.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="text-encomp-green mr-3 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">
                    Para 2025, o ENCOMP chega à sua 10ª edição com uma programação especial, trazendo temas inovadores como Inteligência Artificial, Cloud Computing, Edição de Vídeo e muito mais, além do primeiro campeonato oficial de League of Legends.
                  </p>
                </div>
              </div>
              
              <div className="flex justify-center">
                <div className="relative w-full max-w-md">
                  <img 
                    src="/imagens/Logo.png" 
                    alt="CPU Icon" 
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-16 border-t border-encomp-green/20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 bg-gradient-to-r from-encomp-light-green/20 to-encomp-green/20 rounded-lg blur-lg"></div>
                <img 
                  src="/imagens/Logo_if.png" 
                  alt="Instituto Federal" 
                  className="relative w-full rounded-lg border border-encomp-green/30 p-4 bg-encomp-black/90 hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-orbitron">
                <span className="text-encomp-green">&lt;</span>
                Sobre o IFSULDEMINAS
                <span className="text-encomp-green">/&gt;</span>
              </h2>
              
              <p className="text-gray-300 mb-4">
                O Instituto Federal de Educação, Ciência e Tecnologia do Sul de Minas Gerais - Campus Passos é referência na área de computação, com professores dedicados e estrutura moderna. Será o anfitrião do ENCOMP 2025, oferecendo espaço, tecnologia e acolhimento aos participantes.
              </p>
              
              <p className="text-gray-300 mb-4">
                O campus possui laboratórios equipados com tecnologia de ponta, auditórios modernos e toda a infraestrutura necessária para proporcionar uma experiência enriquecedora aos participantes do evento.
              </p>
              
              <p className="text-gray-300">
                Além disso, o IFSULDEMINAS - Campus Passos está situado em uma localização privilegiada na cidade, com fácil acesso e ampla área para estacionamento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
