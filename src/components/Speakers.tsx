
import React, { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const speakersData = [
  {
    id: "paulo-guilherme",
    name: 'Paulo Guilherme',
    title: 'Especialista em Cloud Computing',
    imageUrl: '/imagens/Paulo_guilherme.png',
    description: 'Palestra sobre migração para cloud e otimização de custos com serviços AWS e Azure.',
    date: '15 de Março',
    time: '14:00 - 15:00',
    instituto: 'IFSULDEMINAS - Campus Passos'
  },
  {
    id: "luciano-davilla",
    name: 'Luciano Davilla',
    title: 'DevOps Engineer & Docker Expert',
    imageUrl: '/imagens/Docker_LucianoDavilla.jpg',
    description: 'Docker na prática: containerização e orquestração para desenvolvimento moderno.',
    date: '15 de Março',
    time: '15:30 - 16:30',
    instituto: 'IFSULDEMINAS - Campus Passos'
  },
  {
    id: "romulo-lima",
    name: 'Rômulo Lima',
    title: 'Desenvolvedor Full Stack',
    imageUrl: '/imagens/Romulo_lima.png',
    description: 'Arquiteturas modernas: microserviços, APIs RESTful e desenvolvimento ágil.',
    date: '16 de Março',
    time: '09:00 - 10:00',
    instituto: 'IFSULDEMINAS - Campus Passos'
  },
  {
    id: "bernardao-paulo",
    name: 'Paulo e Bernardão',
    title: 'Especialistas em Cybersecurity',
    imageUrl: '/imagens/Paulo_e_bernardao.png',
    description: 'Ethical Hacking e Cybersecurity: protegendo sistemas e dados empresariais.',
    date: '16 de Março',
    time: '10:30 - 11:30',
    instituto: 'IFSULDEMINAS - Campus Passos'
  },
];

const Speakers = () => {
  const [highlightedSpeaker, setHighlightedSpeaker] = useState<string | null>(null);
  const speakerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (highlightedSpeaker && speakerRefs.current[highlightedSpeaker]) {
      speakerRefs.current[highlightedSpeaker]?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  }, [highlightedSpeaker]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && speakersData.some(speaker => speaker.id === hash)) {
        setHighlightedSpeaker(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section id="speakers" className="py-16 bg-encomp-dark">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8 font-orbitron">
          <span className="text-encomp-green">&lt;</span>
          Palestrantes
          <span className="text-encomp-green">/&gt;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {speakersData.map((speaker, index) => (
            <div 
              id={speaker.id}
              key={index} 
              ref={el => speakerRefs.current[speaker.id] = el}
              className={`bg-encomp-darkGray p-6 rounded-lg shadow-md flex flex-col items-center transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
                highlightedSpeaker === speaker.id ? 'animate-highlight border-2 border-encomp-green/70' : ''
              }`}
              onMouseEnter={() => highlightedSpeaker === speaker.id && setHighlightedSpeaker(null)}
            >
              <Avatar className="w-24 h-24 mb-4 border-2 border-encomp-green/30 hover:border-encomp-green transition-all duration-300">
                <AvatarImage src={speaker.imageUrl} alt={speaker.name} />
                <AvatarFallback className="bg-encomp-dark text-encomp-green">
                  {speaker.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="text-center flex-1">
                <h3 className="text-lg font-semibold text-encomp-green mb-2">{speaker.name}</h3>
                <p className="text-gray-400 text-sm mb-2">{speaker.title}</p>
                <span className="inline-block bg-encomp-green/10 text-encomp-green text-xs px-2 py-1 rounded-full mb-3">
                  {speaker.instituto}
                </span>
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{speaker.description}</p>
                <div className="space-y-1">
                  <p className="text-encomp-green text-sm font-medium">{speaker.date}</p>
                  <p className="text-gray-400 text-sm">{speaker.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;