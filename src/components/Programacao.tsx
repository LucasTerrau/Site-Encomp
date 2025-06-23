
import React from 'react';
import { AlertCircle } from 'lucide-react';

const Programacao = () => {
  return (
    <section id="programacao" className="py-16 bg-encomp-darkGray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center font-orbitron">
          <span className="text-encomp-green">&lt;</span>
          Pré-programação
          <span className="text-encomp-green">/&gt;</span>
        </h2>
        
        <div className="flex items-center justify-center mb-12">
          <div className="bg-encomp-black/50 border border-encomp-green/30 rounded-lg p-4 max-w-2xl">
            <div className="flex items-center text-encomp-green mb-2">
              <AlertCircle className="mr-2" size={20} />
              <span className="font-semibold">Aviso Importante</span>
            </div>
            <p className="text-gray-300 text-sm">
              Esta é uma pré-programação do evento. As atividades, horários e palestrantes estão sujeitos a alterações antes da realização do ENCOMP 2025.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-encomp-black rounded-lg p-6 border border-encomp-green/20">
            <h4 className="text-xl font-bold mb-4 text-encomp-green font-orbitron">
              Cronograma Geral
            </h4>
            <div className="space-y-3 text-gray-300">
              <p><strong>Durante os 5 dias do evento (3 a 7 de Novembro):</strong></p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Cerimônia de abertura e palestras keynote</li>
                <li>Minicursos distribuídos ao longo da semana</li>
                <li>Campeonato de League of Legends - fase classificatória até a final</li>
                <li>Mesa redonda sobre mercado de trabalho</li>
                <li>Coffee breaks para networking</li>
                <li>Cerimônia de encerramento e premiação</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programacao;
