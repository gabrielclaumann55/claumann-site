import HeroButtons from "./HeroButtons";
import HeroBenefits from "./HeroBenefits";
import dashboard from "../../assets/images/dashboard.webp";

function HeroMobile() {
  return (
    <section className="relative overflow-hidden bg-slate-950 pt-24 text-white">

      {/* Glow principal */}
      <div className="absolute -top-32 right-0 h-[500px] w-[500px] rounded-full bg-blue-600/20 blur-[140px]" />

      {/* Glow secundário */}
      <div className="absolute bottom-0 left-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* Badge */}
        <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-300">
          Plataforma completa para Gestão Industrial
        </div>

        {/* Título */}
        <h1 className="mt-6 text-4xl font-extrabold leading-tight">
          Controle sua manutenção
          <span className="block text-blue-500">
            industrial com eficiência.
          </span>
        </h1>

        {/* Texto */}
        <p className="mt-6 text-base leading-7 text-slate-300">
          Centralize manutenção, ativos, documentação técnica, estoque,
          evidências fotográficas, indicadores e relatórios em uma única
          plataforma desenvolvida para aumentar a produtividade,
          disponibilidade e confiabilidade da sua operação.
        </p>

        {/* Imagem */}
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">
          <img
            src={dashboard}
            alt="Dashboard Claumann Sistemas Integrados"
            className="w-full"
            loading="eager"
          />
        </div>

        {/* Botões */}
        <HeroButtons mobile />

        {/* Benefícios */}
        <HeroBenefits />

      </div>

    </section>
  );
}

export default HeroMobile;