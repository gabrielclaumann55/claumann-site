import { ArrowRight, CheckCircle } from "lucide-react";
import dashboard from "../../assets/images/dashboard.png";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Glow */}
      <div className="absolute top-0 right-0 h-[280px] w-[280px] rounded-full bg-blue-600/20 blur-3xl lg:h-[500px] lg:w-[500px]" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-20 lg:px-8 lg:py-28">

        {/* Texto */}
        <div className="max-w-2xl">

          <span className="inline-flex rounded-full border border-blue-500/40 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
            Sistema inteligente de manutenção industrial
          </span>

          <h1 className="mt-8 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Transforme sua manutenção em
            <span className="text-blue-500">
              {" "}dados, controle e eficiência
            </span>
          </h1>

          <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
            A Claumann Sistemas Integrados conecta ordens de serviço,
            equipamentos, solicitações, indicadores e relatórios em uma
            única plataforma desenvolvida para ambientes industriais.
          </p>

          {/* Botões */}
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">

            <a
              href="#dashboard"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-4 font-semibold transition hover:bg-blue-500 sm:w-auto"
            >
              Conhecer plataforma
              <ArrowRight size={20} />
            </a>

            <a
              href="#funcionalidades"
              className="w-full rounded-xl border border-slate-700 px-7 py-4 text-center font-semibold transition hover:bg-slate-800 sm:w-auto"
            >
              Ver funcionalidades
            </a>

          </div>

          {/* Benefícios */}
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500 flex-shrink-0" />
              <span>Controle completo da manutenção</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500 flex-shrink-0" />
              <span>Indicadores MTBF e MTTR</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500 flex-shrink-0" />
              <span>Gestão de equipamentos</span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500 flex-shrink-0" />
              <span>Relatórios inteligentes</span>
            </div>

          </div>

        </div>

        {/* Dashboard */}
        <div className="relative mt-12 flex justify-center lg:mt-0">

          <div className="absolute inset-0 rounded-3xl bg-blue-600/20 blur-3xl" />

          <img
            src={dashboard}
            alt="Dashboard Claumann Sistemas Integrados"
            className="relative w-full max-w-md rounded-2xl border border-slate-800 shadow-2xl lg:max-w-xl"
          />

        </div>

      </div>
    </section>
  );
}

export default Hero;