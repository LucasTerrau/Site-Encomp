import { Button } from "@/components/ui/button";
import { FolderOpen, ExternalLink, Video, Play } from "lucide-react";

const DRIVE_LINK = "https://drive.google.com/drive/folders/1Fe7AMFcJs18FuMIvAlakNd4bHSLjijo6?usp=sharing";

const VideoMinicursos = () => {
  return (
    <section id="videos-minicursos" className="py-16 bg-encomp-black">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center font-orbitron">
          <span className="text-encomp-green">&lt;</span>
          Vídeos dos Minicursos
          <span className="text-encomp-green">/&gt;</span>
        </h2>

        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Acesse as gravações dos minicursos online do ENCOMP 2025. 
          Todo o conteúdo está disponível gratuitamente no Google Drive.
        </p>

        <div className="max-w-xl mx-auto">
          <div className="bg-encomp-dark rounded-2xl border border-encomp-green/30 p-8 text-center hover:border-encomp-green/60 transition-all hover:shadow-lg hover:shadow-encomp-green/20">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-encomp-green/20 flex items-center justify-center">
              <Video className="w-10 h-10 text-encomp-green" />
            </div>

            <h3 className="text-xl font-bold text-white font-orbitron mb-3">
              Gravações dos Minicursos Online
            </h3>

            <p className="text-gray-400 mb-6">
              Todas as gravações dos minicursos online estão disponíveis na nossa pasta do Google Drive. 
              Clique no botão abaixo para acessar.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                asChild
                className="bg-encomp-green text-black hover:bg-encomp-light-green font-bold gap-2 px-6 py-3"
              >
                <a
                  href={DRIVE_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FolderOpen size={20} />
                  Acessar Vídeos no Drive
                  <ExternalLink size={16} />
                </a>
              </Button>
            </div>

            <div className="mt-6 pt-6 border-t border-encomp-green/20">
              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Play size={14} className="text-encomp-green" />
                <span>Minicursos: Blender, DaVinci, Deep Learning, Computação Forense e mais</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoMinicursos;
