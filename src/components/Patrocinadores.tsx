import React from "react";

type Collaborator = { name: string; logo: string };

const COLABORADORES: Collaborator[] = [
  { name: "Azarrara", logo: "/imagens/logo azarrara-1.png" },
  { name: "Bárbara Moda Inteligente", logo: "/imagens/logo barbara 1.png" },
  { name: "Diolli Sabores", logo: "/imagens/logo diolli sabores.png" },
  { name: "Estilo Rock", logo: "/imagens/logo estilo rock - Editado.png" },
  { name: "Fernandes Hamburgueria", logo: "/imagens/fernandesHamburgueria.jpg"},
  { name: "Patos Burguer", logo: "/imagens/Logo Patos Burguer.png" },
  { name: "Ronaldo Importados", logo: "/imagens/Logo Ronaldo Importados-1.png" },
  { name: "Tribo Kids", logo: "/imagens/logo tribo Kids (1).png" },
  { name: "Undersexy", logo: "/imagens/logo undersexy-1.png" },
];

const Sponsors = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-encomp-black">
      {/* imagem de fundo base */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1500&q=60')] bg-cover bg-center opacity-20" />

      {/* vinheta e aurora verde-azulada */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1000px_600px_at_50%_-10%,rgba(0,255,153,0.25),transparent_60%),radial-gradient(800px_500px_at_90%_90%,rgba(0,200,255,0.15),transparent_50%)]" />

      {/* vidro escuro e leve blur */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/40" />

      {/* grid sutil estilo neon */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none bg-[linear-gradient(0deg,transparent_24%,rgba(0,255,153,0.3)_25%,rgba(0,255,153,0.3)_26%,transparent_27%,transparent_74%,rgba(0,255,153,0.3)_75%,rgba(0,255,153,0.3)_76%,transparent_77%),linear-gradient(90deg,transparent_24%,rgba(0,255,153,0.3)_25%,rgba(0,255,153,0.3)_26%,transparent_27%,transparent_74%,rgba(0,255,153,0.3)_75%,rgba(0,255,153,0.3)_76%,transparent_77%)] bg-[length:32px_32px]" />

      {/* conteúdo */}
      <div className="relative z-10 container mx-auto px-4">
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
        {/* moldura tipo “glass” com contraste alto */}
        <div className="w-full h-40 md:h-48 flex items-center justify-center 
                        rounded-2xl border border-encomp-green/15 
                        bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.03))]
                        shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] overflow-hidden">
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
