
import React from 'react';
import { Github } from 'lucide-react';
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-encomp-dark py-12 border-t border-encomp-green/20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-encomp-green font-orbitron">ENCOMP 2025</h3>
            <p className="text-gray-400 mb-4">
              O maior evento de computação do Sul de Minas Gerais. Palestras, minicursos, campeonato de League of Legends e muito mais!
            </p>
            <div className="flex justify-center">
              <Button variant="outline" size="icon" className="rounded-full border-encomp-green text-encomp-green hover:bg-encomp-green hover:text-black">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Button>
            </div>
          </div>
          
          
          <div>
            <h3 className="text-xl font-bold mb-4 text-encomp-green font-orbitron">Contato</h3>
            <ul className="space-y-2 text-gray-400">
              <li>IFSULDEMINAS - Campus Passos</li>
              <li>Rua da Penha, 290 - Penha II</li>
              <li>Passos - MG, 37903-070</li>
              <li>encomp@ifsuldeminas.edu.br</li>
              <li>(35) 3526-4856</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-encomp-green/20 mt-8 pt-8 text-center text-gray-500">
          <p className="mt-2 text-sm mb-2">Desenvolvido com 💚 pelos alunos do 6º período do Curso Bacharelado em Ciência da Computação</p>
          <p>© 2025 ENCOMP - Encontro de Computação IFSULDEMINAS. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
