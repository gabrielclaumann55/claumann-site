import { CheckCircle } from "lucide-react";

function Workflow() {
  const steps = [
    {
      title: "1. Estruture seus equipamentos",
      description:
        "Cadastre máquinas, linhas produtivas, componentes e ativos em uma árvore técnica organizada, criando uma base completa da sua manutenção."
    },
    {
      title: "2. Planeje suas manutenções",
      description:
        "Crie planos preventivos, defina periodicidades e acompanhe as atividades programadas para aumentar a confiabilidade dos equipamentos."
    },
    {
      title: "3. Receba solicitações e prioridades",
      description:
        "Centralize demandas da operação, classifique criticidades e transforme necessidades em ações organizadas."
    },
    {
      title: "4. Execute as Ordens de Serviço",
      description:
        "Controle equipes, materiais utilizados, tempos de execução, checklists e registre todas as informações da intervenção."
    },
    {
      title: "5. Registre evidências e histórico",
      description:
        "Adicione fotos antes e depois, informações técnicas e mantenha todo o histórico dos equipamentos rastreável."
    },
    {
      title: "6. Analise resultados e evolua",
      description:
        "Utilize indicadores como MTBF, MTTR, disponibilidade e relatórios para tomar decisões estratégicas e melhorar continuamente."
    }
  ];

  return (
    <section className="bg-slate-50 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="mx-auto max-w-3xl text-center">

          <span className="font-semibold text-blue-600">
            Como funciona
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Do planejamento à melhoria contínua da manutenção
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Um fluxo completo para organizar equipes, equipamentos e processos
            em uma única plataforma inteligente de manutenção industrial.
          </p>

        </div>


        <div className="mt-16 space-y-6">

          {steps.map((step,index)=>(
            <div
              key={index}
              className="rounded-2xl bg-white border border-slate-200 p-8 shadow-sm hover:shadow-lg transition"
            >

              <div className="flex items-center gap-4">

                <CheckCircle 
                  className="text-blue-600" 
                  size={30}
                />

                <h3 className="text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

              </div>


              <p className="mt-4 text-slate-600 leading-relaxed">
                {step.description}
              </p>


            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Workflow;