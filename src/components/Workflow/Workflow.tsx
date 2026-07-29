import { CheckCircle } from "lucide-react";

function Workflow() {
  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold text-blue-600">
            Como funciona
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Um fluxo simples para controlar toda a manutenção
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Organize sua manutenção do cadastro dos equipamentos até os
            indicadores de desempenho em um único sistema.
          </p>

        </div>

        <div className="mt-16 space-y-6">

          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <CheckCircle className="text-blue-600" size={30}/>
              <h3 className="text-2xl font-bold text-slate-900">
                1. Cadastre seus equipamentos
              </h3>
            </div>

            <p className="mt-4 text-slate-600">
              Organize máquinas, ativos e componentes em uma estrutura técnica completa.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <CheckCircle className="text-blue-600" size={30}/>
              <h3 className="text-2xl font-bold text-slate-900">
                2. Planeje a manutenção
              </h3>
            </div>

            <p className="mt-4 text-slate-600">
              Programe atividades preventivas e acompanhe toda a rotina da equipe.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <CheckCircle className="text-blue-600" size={30}/>
              <h3 className="text-2xl font-bold text-slate-900">
                3. Execute as Ordens de Serviço
              </h3>
            </div>

            <p className="mt-4 text-slate-600">
              Registre atividades, peças utilizadas, responsáveis e evidências.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm">
            <div className="flex items-center gap-4">
              <CheckCircle className="text-blue-600" size={30}/>
              <h3 className="text-2xl font-bold text-slate-900">
                4. Analise os indicadores
              </h3>
            </div>

            <p className="mt-4 text-slate-600">
              Acompanhe MTBF, MTTR, relatórios e histórico para melhorar continuamente a manutenção.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Workflow;