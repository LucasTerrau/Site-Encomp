
import React from 'react';
import { Award } from 'lucide-react';

const Sponsors = () => {
  return (
    <section className="py-16 bg-encomp-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')] bg-cover bg-center opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-encomp-green">&lt;</span>
          Patrocinadores
          <span className="text-encomp-green">/&gt;</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <SponsorCard 
            name="Instituto Federal" 
            logo="/lovable-uploads/854ac8b9-45db-422a-a96b-6897808decea.png"
            type="Diamante"
          />
          
          <SponsorCard 
            name="TechCorp" 
            logo="https://via.placeholder.com/200x80/171717/00ff88?text=TechCorp"
            type="Ouro"
          />
          
          <SponsorCard 
            name="DevSolutions" 
            logo="https://via.placeholder.com/200x80/171717/00ff88?text=DevSolutions"
            type="Prata"
          />
          
          <SponsorCard 
            name="InnovateTech" 
            logo="https://via.placeholder.com/200x80/171717/00ff88?text=InnovateTech"
            type="Bronze"
          />
        </div>
        
        <div className="mt-16 text-center">
          <h3 className="text-xl font-bold mb-4">
            <Award className="inline mr-2 text-encomp-green" />
            Quer ser um patrocinador?
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Tenha sua marca associada ao maior evento de computação do Sul de Minas. Entre em contato conosco para conhecer os planos de patrocínio.
          </p>
          <a 
            href="mailto:encomp@ifsuldeminas.edu.br" 
            className="inline-flex items-center px-6 py-3 bg-encomp-light-green hover:bg-encomp-green text-black font-bold rounded-lg transition-colors"
          >
            Seja um Patrocinador
          </a>
        </div>
      </div>
    </section>
  );
};

interface SponsorCardProps {
  name: string;
  logo: string;
  type: 'Diamante' | 'Ouro' | 'Prata' | 'Bronze';
}

const SponsorCard: React.FC<SponsorCardProps> = ({ name, logo, type }) => {
  const getBadgeColor = () => {
    switch (type) {
      case 'Diamante': return 'bg-blue-500';
      case 'Ouro': return 'bg-yellow-500';
      case 'Prata': return 'bg-gray-300';
      case 'Bronze': return 'bg-amber-700';
      default: return 'bg-encomp-green';
    }
  };

  return (
    <div className="bg-encomp-darkGray rounded-lg p-6 border border-encomp-green/20 hover:border-encomp-green/40 transition-all hover:shadow-md hover:shadow-encomp-green/20 flex flex-col items-center group">
      <div className="relative mb-4">
        <span className={`absolute -top-3 -right-3 ${getBadgeColor()} text-xs font-bold px-2 py-1 rounded-full`}>
          {type}
        </span>
        <div className="w-full h-32 flex items-center justify-center p-4 bg-white/5 rounded-lg border border-encomp-green/10 group-hover:border-encomp-green/30 transition-all">
          <img 
            src={logo} 
            alt={`${name} logo`} 
            className="max-w-full max-h-full object-contain" 
          />
        </div>
      </div>
      
      <h3 className="text-xl font-bold text-center">{name}</h3>
    </div>
  );
};

export default Sponsors;
