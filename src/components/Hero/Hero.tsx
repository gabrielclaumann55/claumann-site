import { useState } from "react";
import { CheckCircle, Play, MessageCircle } from "lucide-react";
import videoDemo from "../../assets/videos/apresentacao.mp4";
import dashboard from "../../assets/images/dashboard.png";

function Hero() {
  const [openVideo, setOpenVideo] = useState(false);
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
    <section className="relative overflow-hidden bg-slate-950 pt-24 text-white">

      {/* Glow principal */}
      <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Glow secundário */}
      <div className="absolute bottom-0 left-0 h-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />


      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">


        {/* Texto */}
        <div>

          {/* Badge */}
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Plataforma completa para Gestão Industrial
          </div>


          {/* Título */}
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Controle sua manutenção
            <span className="block text-blue-500">
              industrial com eficiência.
            </span>
          </h1>


          {/* Texto */}
          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 lg:text-lg">
            Centralize manutenção, ativos, documentação técnica, estoque,
            evidências fotográficas, indicadores e relatórios em uma única
            plataforma desenvolvida para aumentar a produtividade,
            disponibilidade e confiabilidade da sua operação.
          </p>


          {/* Botões */}
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
              className="rounded-xl border border-slate-700 px-8 py-4 text-center font-semibold transition hover:border-blue-500 hover:bg-slate-900"
            >
              Conhecer Recursos
            </a>

          </div>


          {/* Benefícios */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <CheckCircle className="flex-shrink-0 text-blue-500" />
              <span className="text-slate-300">
                Gestão completa de ativos
              </span>
            </div>


            <div className="flex items-center gap-3">
              <CheckCircle className="flex-shrink-0 text-blue-500" />
              <span className="text-slate-300">
                Documentação técnica integrada
              </span>
            </div>


            <div className="flex items-center gap-3">
              <CheckCircle className="flex-shrink-0 text-blue-500" />
              <span className="text-slate-300">
                Evidências e histórico visual
              </span>
            </div>


            <div className="flex items-center gap-3">
              <CheckCircle className="flex-shrink-0 text-blue-500" />
              <span className="text-slate-300">
                Indicadores em tempo real
              </span>
            </div>

          </div>

        </div>



        {/* Área visual - Vídeo */}
        <div className="relative flex justify-center">


          {/* Glow */}
          <div className="absolute inset-0 rounded-[40px] bg-blue-600/20 blur-3xl" />


  {/* Desktop */}
<div className="relative hidden overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl transition duration-500 hover:-translate-y-2 lg:block">

  <video
    src={videoDemo}
    autoPlay
    muted
    loop
    playsInline
    preload="metadata"
    className="w-full max-w-2xl"
  />

</div>

{/* Mobile */}
<div className="relative lg:hidden">

  <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
    <img
      src={dashboard}
      alt="Dashboard Claumann Sistemas Integrados"
      className="w-full"
    />
  </div>

  <div className="mt-6">
    <button
      type="button"
      onClick={() => setOpenVideo(true)}
      className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/30 transition-all duration-300 hover:bg-blue-500"
    >
      <Play size={18} />
      Assistir demonstração
    </button>
  </div>

</div>



          {/* Card superior */}
          <div className="absolute -top-5 -right-5 z-10 hidden rounded-2xl border border-slate-700 bg-slate-900/90 px-5 py-3 shadow-xl backdrop-blur lg:block">

            <p className="text-xs text-slate-400">
              Plataforma
            </p>

            <p className="text-lg font-bold text-blue-400">
              Online
            </p>

          </div>



          {/* Card inferior */}
        <div className="pointer-events-none absolute -bottom-5 -left-5 z-10 hidden rounded-2xl border border-slate-700 bg-slate-900/90 px-5 py-3 shadow-xl backdrop-blur lg:block">
  <p className="text-xs text-slate-400">
    Gestão Industrial
  </p>

  <p className="text-lg font-bold text-green-400">
    Inteligente
  </p>
</div>


        </div>


      </div>

    {openVideo && (
  <div
    className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    onClick={() => setOpenVideo(false)}
  >
    <div
      className="relative w-full max-w-5xl"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        onClick={() => setOpenVideo(false)}
        className="absolute -top-12 right-0 text-4xl text-white transition hover:text-blue-400"
      >
        ✕
      </button>

      <div className="overflow-hidden rounded-3xl border border-slate-700 bg-slate-900 shadow-2xl">
        <video
          src={videoDemo}
          controls
          autoPlay
          className="w-full"
        />
      </div>
    </div>
  </div>
)}
</section>
  );
}

export default Hero;