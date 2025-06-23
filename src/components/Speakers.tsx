
import React, { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const speakersData = [
  {
    id: "john-doe",
    name: 'John Doe',
    title: 'Software Engineer',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: "jane-smith",
    name: 'Jane Smith',
    title: 'UX Designer',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: "alice-johnson",
    name: 'Alice Johnson',
    title: 'Data Scientist',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: "robert-chen",
    name: 'Robert Chen',
    title: 'Product Manager',
    imageUrl: 'https://via.placeholder.com/150',
  },
  {
    id: "sarah-williams",
    name: 'Sarah Williams',
    title: 'Backend Developer',
    imageUrl: 'https://via.placeholder.com/150',
  },
];

const Speakers = () => {
  const [highlightedSpeaker, setHighlightedSpeaker] = useState<string | null>(null);
  const speakerRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  // Scroll to highlighted speaker
  useEffect(() => {
    if (highlightedSpeaker && speakerRefs.current[highlightedSpeaker]) {
      speakerRefs.current[highlightedSpeaker]?.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'center' 
      });
    }
  }, [highlightedSpeaker]);

  // Check for speaker highlight from URL hash
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
        <h2 className="text-3xl font-bold text-white mb-8">
          <span className="text-encomp-green">&lt;</span>
          Speakers
          <span className="text-encomp-green">/&gt;</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
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
              <Avatar className="w-32 h-32 mb-4 border-2 border-encomp-green/30 hover:border-encomp-green transition-all duration-300">
                <AvatarImage src={speaker.imageUrl} alt={speaker.name} />
                <AvatarFallback className="bg-encomp-dark text-encomp-green">
                  {speaker.name.split(' ').map(n => n[0]).join('')}
                </AvatarFallback>
              </Avatar>
              <div className="text-center">
                <p className="text-gray-400 mb-2">{speaker.title}</p>
                <h3 className="text-xl font-semibold text-encomp-green">{speaker.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;
