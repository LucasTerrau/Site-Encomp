import { Card, CardContent } from "@/components/ui/card";
import { Users, Monitor, Gamepad2 } from "lucide-react";
import { ReactNode } from "react";

interface ActivityCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  image: string;
}

const ActivityCard = ({ title, description, icon, image }: ActivityCardProps) => (
  <Card className="overflow-hidden bg-transparent border border-encomp-green/20 group hover:border-encomp-green/50 transition-all hover:shadow-md hover:shadow-encomp-green/20">
    <div className="h-48 relative overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
    </div>
    <CardContent className="pt-8 pb-8 relative bg-encomp-black bg-opacity-90">
      <div className="absolute -top-10 left-4 bg-encomp-dark p-4 rounded-full border border-encomp-green/30 shadow-lg group-hover:border-encomp-green/60 transition-all">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-8 pl-16 font-orbitron">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </CardContent>
  </Card>
);

const Gallery = () => {
  const activities = [
    {
      title: "Palestras",
      description: "Assista palestras com profissionais renomados da área de tecnologia e inovação.",
      icon: <Users className="text-encomp-green w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1495465798138-718f86d1a4bc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
    {
      title: "Minicursos",
      description: "Participe de cursos práticos em áreas como Cloud, Edição de Vídeo e Inteligência Artificial.",
      icon: <Monitor className="text-encomp-green w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
    {
      title: "Campeonato de LoL",
      description: "Mostre suas habilidades no torneio de League of Legends e dispute com outras equipes!",
      icon: <Gamepad2 className="text-encomp-green w-12 h-12" />,
      image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
    },
  ];

  return (
    <section id="galeria" className="py-16 bg-encomp-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-orbitron">
          <span className="text-encomp-green">&lt;</span>
          O que te espera no ENCOMP
          <span className="text-encomp-green">/&gt;</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activities.map((activity) => (
            <ActivityCard key={activity.title} {...activity} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
