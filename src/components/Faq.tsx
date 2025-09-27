import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
//a
const Faq = () => {
  const faqs = [
    {
      pergunta: "O que é o ENCOMP?",
      resposta:
        "É um evento gratuito focado em computação com palestras, cursos, convidados e muito mais. O ENCOMP reúne estudantes, profissionais e entusiastas da área de tecnologia para compartilhar conhecimentos e experiências.",
    },
    {
      pergunta: "Preciso pagar algo?",
      resposta:
        "Não! O ENCOMP é 100% gratuito. Todas as palestras, workshops e atividades são oferecidos de forma gratuita aos participantes.",
    },
    {
      pergunta: "Onde será realizado?",
      resposta:
        "No Instituto Federal do Sul de Minas - Campus Passos, R. da Penha, 290 - Penha II, Passos - MG, 37903-070. O evento também terá momentos online com minicursos pra você fazer da sua casa.",
    },
    {
      pergunta: "Preciso me inscrever com antecedência?",
      resposta:
        "Sim, recomendamos que você se inscreva com antecedência para garantir sua vaga, pois temos um número limitado de participantes. A inscrição pode ser feita diretamente no site do evento.",
    },
    {
      pergunta: "Ganharei certificado de participação?",
      resposta:
        "Sim, todos os participantes receberão certificados de participação digital, desde que atendam aos requisitos mínimos de presença nas atividades.",
    },
    {
      pergunta: "Posso participar remotamente?",
      resposta:
        "Sim! Teremos atividades online, minicursos e palestras. Basta se inscrever!",
    },
  ];

  return (
    <section id="faq" className="py-16 bg-encomp-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="text-encomp-green">&lt;</span>
          Perguntas Frequentes
          <span className="text-encomp-green">/&gt;</span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-encomp-green/20 rounded-lg overflow-hidden bg-encomp-darkGray hover:border-encomp-green/40 transition-all"
              >
                <AccordionTrigger className="px-4 py-4 font-semibold text-left flex items-center">
                  <HelpCircle
                    className="mr-2 text-encomp-green flex-shrink-0"
                    size={20}
                  />
                  <span>{faq.pergunta}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-4 pt-0 text-gray-300">
                  <div className="pl-8">{faq.resposta}</div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Faq;
