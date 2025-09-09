
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-scroll';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isEventDropdownOpen, setIsEventDropdownOpen] = useState(false);
  const [isInfoDropdownOpen, setIsInfoDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false);
    setIsEventDropdownOpen(false);
    setIsInfoDropdownOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-encomp-dark/90 backdrop-blur shadow-md shadow-encomp-green/10' : 'bg-transparent'}`}>
      <div className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 relative">
            <img 
              src="/imagens/Logo.png" 
              alt="ENCOMP Logo" 
              className="w-full h-full object-contain animate-[pulse_3s_ease-in-out_infinite]" 
            />
          </div>
          <span className="text-xl font-bold text-white font-orbitron">ENCOMP</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="hero" spy={true} smooth={true} duration={500} className="text-sm text-white hover:text-encomp-green transition-colors cursor-pointer">
            Home
          </Link>
          
          <DropdownMenu open={isEventDropdownOpen} onOpenChange={setIsEventDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm text-white hover:text-encomp-green transition-colors cursor-pointer">
                Sobre o Evento
                <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-encomp-dark/95 backdrop-blur border-encomp-green/20">
              <DropdownMenuItem asChild>
                <button onClick={() => scrollToSection('historia')} className="w-full text-left text-white hover:text-encomp-green hover:bg-encomp-green/10 cursor-pointer">
                  História
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button onClick={() => scrollToSection('galeria')} className="w-full text-left text-white hover:text-encomp-green hover:bg-encomp-green/10 cursor-pointer">
                  Galeria
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button onClick={() => scrollToSection('programacao')} className="w-full text-left text-white hover:text-encomp-green hover:bg-encomp-green/10 cursor-pointer">
                  Pré-programação
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button onClick={() => scrollToSection('minicursos')} className="w-full text-left text-white hover:text-encomp-green hover:bg-encomp-green/10 cursor-pointer">
                  Minicursos
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <DropdownMenu open={isInfoDropdownOpen} onOpenChange={setIsInfoDropdownOpen}>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-1 text-sm text-white hover:text-encomp-green transition-colors cursor-pointer">
                Informações
                <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-encomp-dark/95 backdrop-blur border-encomp-green/20">
              <DropdownMenuItem asChild>
                <button onClick={() => scrollToSection('patrocinio')} className="w-full text-left text-white hover:text-encomp-green hover:bg-encomp-green/10 cursor-pointer">
                  Seja um Patrocinador
                </button>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <button onClick={() => scrollToSection('faq')} className="w-full text-left text-white hover:text-encomp-green hover:bg-encomp-green/10 cursor-pointer">
                  FAQ
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link 
            to="inscricao" 
            spy={true} 
            smooth={true} 
            duration={500} 
            className="bg-encomp-green text-encomp-dark px-4 py-2 rounded font-medium hover:bg-encomp-green/80 transition-colors cursor-pointer"
          >
            Pré-inscrição
          </Link>
        </nav>

        <button 
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full bg-encomp-dark/95 backdrop-blur flex flex-col items-center py-4 shadow-lg md:hidden">
            <Link onClick={() => setIsOpen(false)} to="hero" spy={true} smooth={true} duration={500} className="my-2 text-white hover:text-encomp-green transition-colors cursor-pointer">Home</Link>
            <Link onClick={() => setIsOpen(false)} to="historia" spy={true} smooth={true} duration={500} className="my-2 text-white hover:text-encomp-green transition-colors cursor-pointer">História</Link>
            <Link onClick={() => setIsOpen(false)} to="galeria" spy={true} smooth={true} duration={500} className="my-2 text-white hover:text-encomp-green transition-colors cursor-pointer">Galeria</Link>
            <Link onClick={() => setIsOpen(false)} to="programacao" spy={true} smooth={true} duration={500} className="my-2 text-white hover:text-encomp-green transition-colors cursor-pointer">Pré-programação</Link>
            <Link onClick={() => setIsOpen(false)} to="minicursos" spy={true} smooth={true} duration={500} className="my-2 text-white hover:text-encomp-green transition-colors cursor-pointer">Minicursos</Link>
            <Link onClick={() => setIsOpen(false)} to="inscricao" spy={true} smooth={true} duration={500} className="my-2 text-white hover:text-encomp-green transition-colors cursor-pointer">Pré-inscrição</Link>
            <Link onClick={() => setIsOpen(false)} to="patrocinio" spy={true} smooth={true} duration={500} className="my-2 text-white hover:text-encomp-green transition-colors cursor-pointer">Seja um Patrocinador</Link>
            <Link onClick={() => setIsOpen(false)} to="faq" spy={true} smooth={true} duration={500} className="my-2 text-white hover:text-encomp-green transition-colors cursor-pointer">FAQ</Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
