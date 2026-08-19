import {
  BarChart3,
  CalendarDays,
  ClipboardList,
  Package,
  Settings2
} from "lucide-react";

import HeroButtons from "./HeroButtons";
import HeroBenefits from "./HeroBenefits";

function HeroMobile() {
  return (
    <section className="relative overflow-hidden bg-white pt-[76px]">

      {/* Fundo decorativo */}
      <div className="pointer-events-none absolute -right-40 top-0 h-[420px] w-[420px] rounded-full bg-blue-100/80 blur-[130px]" />

      <div className="pointer-events-none absolute -left-32 bottom-20 h-[320px] w-[320px] rounded-full bg-slate-100 blur-[120px]" />

      <div className="relative px-5 py-12 sm:px-6">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-medium text-blue-700">
          <span className="h-2 w-2 rounded-full bg-blue-600" />
          Tecnologia aplicada à indústria
        </div>

        {/* Título */}
        <h1 className="mt-6 text-[40px] font-bold leading-[1.06] tracking-[-0.03em] text-slate-950 sm:text-[46px]">
          Gestão industrial
          <span className="block text-blue-600">
            sob controle.
          </span>
        </h1>

        {/* Texto */}
        <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
          Centralize manutenção, equipamentos, planejamento, estoque e
          indicadores em uma solução criada para organizar e dar
          visibilidade à operação industrial.
        </p>

        {/* Botões */}
        <HeroButtons />

        {/* Visual */}
        <div
          className="
            mt-10
            rounded-2xl
            border
            border-slate-200
            bg-white
            p-4
            shadow-xl
            shadow-slate-200/60
          "
        >

          <div className="mb-4">
            <p className="text-sm font-semibold text-slate-900">
              Gestão integrada
            </p>

            <p className="mt-1 text-xs text-slate-500">
              Informações centralizadas em um único ambiente
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3">

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <ClipboardList
                size={20}
                className="text-blue-600"
              />

              <p className="mt-3 text-sm font-semibold text-slate-900">
                Manutenção
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Ordens e solicitações
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <Settings2
                size={20}
                className="text-blue-600"
              />

              <p className="mt-3 text-sm font-semibold text-slate-900">
                Equipamentos
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Ativos e histórico
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <CalendarDays
                size={20}
                className="text-blue-600"
              />

              <p className="mt-3 text-sm font-semibold text-slate-900">
                Planejamento
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Preventivas e programação
              </p>
            </div>

            <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
              <Package
                size={20}
                className="text-blue-600"
              />

              <p className="mt-3 text-sm font-semibold text-slate-900">
                Estoque
              </p>

              <p className="mt-1 text-[11px] text-slate-500">
                Peças e materiais
              </p>
            </div>

          </div>

          {/* Indicadores */}
          <div className="mt-3 flex items-center gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4">

            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-white text-blue-600 shadow-sm">
              <BarChart3 size={19} />
            </div>

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Indicadores
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Visibilidade para tomada de decisão
              </p>
            </div>

          </div>

        </div>

        {/* Benefícios */}
        <HeroBenefits />

      </div>

    </section>
  );
}

export default HeroMobile;