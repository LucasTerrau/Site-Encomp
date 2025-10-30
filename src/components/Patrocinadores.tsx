import React from "react";

type Collaborator = { name: string; logo: string };

const COLABORADORES: Collaborator[] = [
  { name: "Azarrara", logo: "/imagens/logo azarrara-1.png" },
  { name: "Bárbara      Moda Inteligente", logo: "/imagens/logo barbara 1.png" },
  { name: "Clínica Lumiere", logo: "/imagens/logo clinica lumiere.png" },
  { name: "Diolli Sabores", logo: "/imagens/logo diolli sabores.png" },
  { name: "Estilo Rock", logo: "/imagens/logo estilo rock - Editado.png" },
  { name: "Patos Burguer", logo: "/imagens/Logo Patos Burguer.png" },
  { name: "Ronaldo Importados", logo: "/imagens/Logo Ronaldo Importados-1.png" },
  { name: "Tribo Kids", logo: "/imagens/logo tribo Kids (1).png" },
  { name: "Undersexy", logo: "/imagens/logo undersexy-1.png" },
];

const Sponsors = () => {
  return (
    <section className="py-20 bg-encomp-black relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80')] bg-cover bg-center opacity-10" />

      <div className="container mx-auto px-4 relative z-10">
        <header className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
            Nossos Colaboradores
          </h2>
          <p className="text-encomp-green/80 text-lg">
            Agradecemos a cada colaborador pelo apoio e confiança.
          </p>
        </header>

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
          {COLABORADORES.map((c) => (
            <li key={c.name}>
              <CollaboratorCard name={c.name} logo={c.logo} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

const CollaboratorCard: React.FC<Collaborator> = ({ name, logo }) => {
  return (
    <div
      className="group bg-encomp-darkGray/60 rounded-3xl border border-encomp-green/30 hover:border-encomp-green/60 transition-all hover:shadow-lg hover:shadow-encomp-green/25 backdrop-blur-sm"
      title={name}
    >
      <div className="p-6 flex flex-col items-center justify-center">
        {/* Ajuste para exibir 100% da logo */}
        <div className="w-full h-40 md:h-48 flex items-center justify-center bg-white/10 rounded-2xl border border-encomp-green/10 overflow-hidden">
          <img
            src={logo}
            alt={`Logo de ${name}`}
            className="object-contain max-h-[90%] max-w-[90%] transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
        </div>
        <p className="mt-4 text-center text-base font-semibold text-white/90">
          {name}
        </p>
      </div>
    </div>
  );
};

export default Sponsors;
