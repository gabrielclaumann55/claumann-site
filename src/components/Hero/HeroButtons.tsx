import { MessageCircle, Play } from "lucide-react";

type HeroButtonsProps = {
  mobile?: boolean;
};

function HeroButtons({ mobile = false }: HeroButtonsProps) {
  const whatsappNumber = "5541997328757";

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá, gostaria de conhecer a Claumann Sistemas Integrados e solicitar uma demonstração da plataforma de manutenção industrial."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank"
    );
  };

  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">

      <button
        onClick={handleWhatsApp}
        className="
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          bg-blue-600
          px-8
          py-4
          font-semibold
          text-white
          shadow-lg
          shadow-blue-600/30
          transition-all
          duration-300
          hover:-translate-y-1
          hover:bg-blue-500
        "
      >
        Solicitar Demonstração
        <MessageCircle size={20} />
      </button>

      <a
        href="#funcionalidades"
        className="
          rounded-xl
          border
          border-slate-700
          px-8
          py-4
          text-center
          font-semibold
          transition
          hover:border-blue-500
          hover:bg-slate-900
        "
      >
        Conhecer Recursos
      </a>

      {mobile && (
        <a
          href="https://www.youtube.com/watch?v=hqiLCk8fer8"
          target="_blank"
          rel="noopener noreferrer"
          className="
            flex
            items-center
            justify-center
            gap-2
            rounded-xl
            border
            border-blue-500
            px-8
            py-4
            font-semibold
            text-blue-300
            transition
            hover:bg-blue-500/10
          "
        >
          <Play size={18} />
          Assistir demonstração
        </a>
      )}

    </div>
  );
}

export default HeroButtons;