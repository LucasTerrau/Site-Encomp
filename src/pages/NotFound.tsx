import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-encomp-black flex flex-col items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-encomp-green font-orbitron mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 font-orbitron">Página não encontrada</h2>
        <p className="text-gray-400 mb-8 max-w-md">A página que você está procurando não existe ou foi movida.</p>
        <Button asChild className="bg-encomp-green text-black hover:bg-encomp-light-green font-bold gap-2">
          <Link to="/">
            <Home size={18} />
            Voltar ao início
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
