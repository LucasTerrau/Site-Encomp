import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToRegistration = () => {
    const element = document.getElementById("inscricao");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  //a
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center pt-20 pb-16 px-4 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')] bg-cover bg-center opacity-10"></div>

      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1/3 h-1/3 border border-encomp-green/20 rounded-full top-1/4 left-1/4 animate-pulse"></div>
        <div
          className="absolute w-1/2 h-1/2 border border-encomp-green/10 rounded-full top-1/4 right-1/4 animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
        <div className="absolute w-80 h-80 bg-encomp-green/5 blur-3xl rounded-full top-1/3 left-1/2 transform -translate-x-1/2"></div>
      </div>

      <div className="container mx-auto text-center z-10">
        <div className="mb-6 flex justify-center">
          <div className="relative w-40 h-40 md:w-56 md:h-56 animate-float">
            <img
              src="/imagens/Logo.png"
              alt="ENCOMP 2025 Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-white animate-fade-in-up font-orbitron">
          <span className="text-encomp-green">EN</span>COMP 2025
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="flex items-center text-gray-300">
            <Calendar className="mr-2 text-encomp-green" />
            <p>3 a 7 de Novembro de 2025</p>
          </div>
          <div className="flex items-center text-gray-300">
            <MapPin className="mr-2 text-encomp-green" />
            <p>IFSULDEMINAS - Campus Passos</p>
          </div>
        </div>

        <Button
          onClick={scrollToRegistration}
          className="px-8 py-6 bg-encomp-light-green hover:bg-encomp-green text-black font-bold text-lg rounded-xl transition-all hover:scale-105 duration-200"
        >
          INSCREVA-SE!
        </Button>
      </div>
    </section>
  );
};

export default Hero;
