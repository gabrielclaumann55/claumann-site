import { CheckCircle } from "lucide-react";

function WhyChoose() {
  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="font-semibold text-blue-600">
            Por que escolher a Claumann?
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Desenvolvido para a indústria
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Uma plataforma criada para aumentar o controle, reduzir paradas
            e facilitar a gestão da manutenção.
          </p>

        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2">

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">
                Controle completo
              </h3>
            </div>

            <p className="mt-4 text-slate-600">
              Gerencie Ordens de Serviço, equipamentos e solicitações em um único ambiente.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">
                Indicadores
              </h3>
            </div>

            <p className="mt-4 text-slate-600">
              Visualize MTBF, MTTR e outras informações estratégicas para apoiar decisões.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">
                Rastreabilidade
              </h3>
            </div>

            <p className="mt-4 text-slate-600">
              Histórico completo das intervenções realizadas em cada equipamento.
            </p>
          </div>

          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-600" />
              <h3 className="text-xl font-bold text-slate-900">
                Plataforma em nuvem
              </h3>
            </div>

            <p className="mt-4 text-slate-600">
              Acesse o sistema de qualquer lugar com segurança e praticidade.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;