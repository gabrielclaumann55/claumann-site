import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  Package,
  Settings2,
  ShieldCheck
} from "lucide-react";

import HeroButtons from "./HeroButtons";
import HeroBenefits from "./HeroBenefits";

function HeroDesktop() {
  return (
    <section className="relative overflow-hidden bg-white pt-[76px]">

      {/* Fundo decorativo */}
      <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[600px] w-[600px] rounded-full bg-blue-100/70 blur-[140px]" />

      <div className="pointer-events-none absolute left-[-250px] top-[300px] h-[450px] w-[450px] rounded-full bg-slate-100 blur-[120px]" />

      <div
        className="
          relative
          mx-auto
          grid
          min-h-[660px]
          max-w-7xl
          grid-cols-2
          items-center
          gap-16
          px-8
          py-16
        "
      >

        {/* ESQUERDA */}
        <div className="max-w-[580px]">

          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">

            <span className="h-2 w-2 rounded-full bg-blue-600" />

            Tecnologia aplicada à indústria

          </div>

          <h1 className="mt-7 text-[58px] font-bold leading-[1.04] tracking-[-0.035em] text-slate-950">

            Gestão industrial

            <span className="block text-blue-600">
              sob controle.
            </span>

          </h1>

          <p className="mt-7 max-w-[550px] text-lg leading-8 text-slate-600">
            Centralize manutenção, equipamentos, planejamento, estoque e
            indicadores em uma solução criada para organizar e dar
            visibilidade à operação industrial.
          </p>

          <HeroButtons />

          <HeroBenefits />

        </div>

        {/* DIREITA */}
        <div className="relative flex items-center justify-center">

          <div className="absolute h-[400px] w-[400px] rounded-full bg-blue-100/80 blur-[90px]" />

          <div
            className="
              relative
              w-full
              max-w-[500px]
              rounded-[28px]
              border
              border-slate-200
              bg-white
              p-7
              shadow-2xl
              shadow-blue-950/10
            "
          >

            {/* Cabeçalho */}
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  Gestão integrada
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Informações centralizadas em um único ambiente
                </p>
              </div>

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                <ShieldCheck size={22} />
              </div>

            </div>

            {/* Módulos */}
            <div className="mt-6 grid grid-cols-2 gap-4">

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <ClipboardList
                  size={22}
                  className="text-blue-600"
                />

                <p className="mt-4 text-sm font-semibold text-slate-900">
                  Manutenção
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Ordens e solicitações
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <Settings2
                  size={22}
                  className="text-blue-600"
                />

                <p className="mt-4 text-sm font-semibold text-slate-900">
                  Equipamentos
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Ativos e histórico
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <CalendarDays
                  size={22}
                  className="text-blue-600"
                />

                <p className="mt-4 text-sm font-semibold text-slate-900">
                  Planejamento
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Preventivas e programação
                </p>

              </div>

              <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">

                <Package
                  size={22}
                  className="text-blue-600"
                />

                <p className="mt-4 text-sm font-semibold text-slate-900">
                  Estoque
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Peças e materiais
                </p>

              </div>

            </div>

            {/* Indicadores */}
            <div className="mt-4 flex items-center gap-4 rounded-2xl border border-blue-200 bg-blue-50 p-5">

              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue-600 shadow-sm">

                <BarChart3 size={21} />

              </div>

              <div>

                <p className="text-sm font-semibold text-slate-900">
                  Indicadores e gestão
                </p>

                <p className="mt-1 text-xs text-slate-500">
                  Informação para decisões mais rápidas
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default HeroDesktop;