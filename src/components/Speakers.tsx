import React, { useEffect, useState, useRef } from "react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const speakersData = [
  {
    id: "rildo-borges",
    name: "Rildo Borges\n Duarte",
    title: "Palestrante",
    imageUrl: "/imagens/Palestra2.png",
    description:
      "Algoritmos de destruição em massa: Big Techs, Big Data, IA e seus aspectos socioambientais.",
    date: "03 de Novembro",
    time: "08:30",
    modalidade: "Presencial",
    local: "Auditório",
    instituto: "IFSULDEMINAS - Campus Poços de Caldas ",
  },
  {
    id: "vinicius-otávio",
    name: "Vinicius Otávio de Lima Moreira",
    title: "Palestrante",
    imageUrl: "/imagens/Palestra3.png",
    description:
      "Do Zero ao Futuro - Como entrar no mercado de trabalho com IA no radar e o impacto das escolhas.",
    date: "03 de Novembro",
    time: "10:30",
    modalidade: "Presencial",
    local: "Auditório",
    instituto: "Ex Aluno / Empresa Statum",
  },
  {
    id: "nelito-bernardes",
    name: "Nélito Bernardes Junior",
    title: "Palestrante",
    imageUrl: "/imagens/Palestra1.png",
    description:
      "Do Campus ao Mundo: Navegando décadas de transformações de carreira.",
    date: "04 de Novembro",
    time: "08:30",
    modalidade: "Presencial",
    local: "Auditório",
    instituto: "Empresa Salesforce - SP",
  },
  {
    id: "professores-ifsuldeminas",
    name: "Professores do IFSULDEMINAS",
    title: "Mesa Redonda",
    imageUrl: "/imagens/Passos_mg.png",
    description:
      "Mesa redonda com professores do IFSULDEMINAS sobre diversos temas da computação.",
    date: "04 de Novembro",
    time: "10:30",
    modalidade: "Presencial",
    local: "Auditório",
    instituto: "IFSULDEMINAS - Campus Passos",
  },
];

const Speakers = () => {
  const [highlightedSpeaker, setHighlightedSpeaker] = useState<string | null>(
    null
  );
  const speakerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (highlightedSpeaker && speakerRefs.current[highlightedSpeaker]) {
      speakerRefs.current[highlightedSpeaker]?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [highlightedSpeaker]);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && speakersData.some((speaker) => speaker.id === hash)) {
        setHighlightedSpeaker(hash);
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);
  //a
  return (
    <section id="speakers" className="py-16 bg-encomp-dark">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-8 font-orbitron">
          <span className="text-encomp-green">&lt;</span>
          Palestrantes
          <span className="text-encomp-green">/&gt;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto auto-rows-fr items-stretch">
          {speakersData.map((speaker, index) => (
            <div
              id={speaker.id}
              key={index}
              ref={(el) => (speakerRefs.current[speaker.id] = el)}
              className={`bg-encomp-darkGray h-full p-6 rounded-lg shadow-md flex flex-col transition-all duration-500 transform hover:scale-105 hover:shadow-lg ${
                highlightedSpeaker === speaker.id
                  ? "animate-highlight border-2 border-encomp-green/70"
                  : "border border-encomp-green/20"
              }`}
              onMouseEnter={() =>
                highlightedSpeaker === speaker.id && setHighlightedSpeaker(null)
              }
            >
              <div className="flex flex-col items-center mb-4">
                <Avatar className="w-32 h-32 mb-4 border-2 border-encomp-green/30 hover:border-encomp-green transition-all duration-300">
                  <AvatarImage src={speaker.imageUrl} alt={speaker.name} />
                  <AvatarFallback className="bg-encomp-dark text-encomp-green">
                    {speaker.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                <div className="w-full text-center min-h-[112px] flex flex-col justify-start">
                  <h3 className="text-lg font-semibold text-encomp-green mb-1 whitespace-pre-line break-words line-clamp-2">
                    {speaker.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-2">{speaker.title}</p>
                  <span className="inline-block bg-encomp-green/10 text-encomp-green text-xs px-2 py-1 rounded-full">
                    {speaker.instituto}
                  </span>
                </div>
              </div>

              <div className="flex flex-col justify-between grow">
                <p className="text-gray-300 text-sm mb-4 leading-relaxed text-left line-clamp-4">
                  {speaker.description}
                </p>

                <div className="space-y-1 mt-auto pt-3 border-t border-encomp-green/20">
                  <p className="text-encomp-green text-sm font-medium">
                    {speaker.date}
                  </p>
                  <p className="text-gray-400 text-sm">
                    Início: {speaker.time}
                  </p>
                  <p className="text-gray-400 text-xs">
                    {speaker.modalidade}
                    {speaker.local ? ` (${speaker.local})` : ""}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-4 {
          display: -webkit-box;
          -webkit-line-clamp: 4;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Speakers;
