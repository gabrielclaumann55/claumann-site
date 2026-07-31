import HeroButtons from "./HeroButtons";
import HeroBenefits from "./HeroBenefits";
import HeroVideo from "./HeroVideo";

function HeroDesktop() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 text-white">

      {/* Glow principal */}
      <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Glow secundário */}
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">

        {/* Texto */}
        <div>

          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
            Plataforma completa para Gestão Industrial
          </div>

          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
            Controle sua manutenção
            <span className="block text-blue-500">
              industrial com eficiência.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-slate-300 lg:text-lg">
            Centralize manutenção, ativos, documentação técnica, estoque,
            evidências fotográficas, indicadores e relatórios em uma única
            plataforma desenvolvida para aumentar a produtividade,
            disponibilidade e confiabilidade da sua operação.
          </p>

          <HeroButtons />

          <HeroBenefits />

        </div>

        {/* Vídeo */}
        <HeroVideo />

      </div>

    </section>
  );
}

export default HeroDesktop;