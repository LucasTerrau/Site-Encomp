import { Link } from "react-scroll";

const FloatingRegistrationButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 md:hidden">
      <Link
        to="inscricao"
        spy
        smooth
        duration={500}
        className="bg-encomp-green text-encomp-dark px-6 py-3 rounded-full font-bold shadow-lg hover:bg-encomp-green/90 cursor-pointer flex items-center justify-center text-sm"
      >
        Inscreva-se já!
      </Link>
    </div>
  );
};

export default FloatingRegistrationButton;
