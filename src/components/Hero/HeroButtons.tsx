import { ArrowRight, MessageCircle } from "lucide-react";

function HeroButtons() {
  const whatsappNumber = "5541997328757";

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá, gostaria de conhecer a Claumann Sistemas Integrados e solicitar uma demonstração da solução de gestão industrial."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="mt-8 flex flex-col gap-4 sm:flex-row">

      {/* CTA principal */}
      <button
        type="button"
        onClick={handleWhatsApp}
        className="
          group
          flex
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-blue-600
          px-7
          py-4
          text-sm
          font-semibold
          text-white
          shadow-lg
          shadow-blue-600/20
          transition-all
          duration-300
          hover:-translate-y-0.5
          hover:bg-blue-700
          hover:shadow-xl
          hover:shadow-blue-600/25
        "
      >
        Solicitar demonstração

        <MessageCircle
          size={19}
          strokeWidth={2}
        />
      </button>

      {/* CTA secundário */}
      <a
        href="#funcionalidades"
        className="
          group
          flex
          items-center
          justify-center
          gap-2
          rounded-xl
          border
          border-slate-300
          bg-white
          px-7
          py-4
          text-sm
          font-semibold
          text-slate-700
          transition-all
          duration-300
          hover:border-blue-300
          hover:bg-blue-50
          hover:text-blue-700
        "
      >
        Conhecer recursos

        <ArrowRight
          size={17}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </a>

    </div>
  );
}

export default HeroButtons;