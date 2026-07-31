import { CheckCircle } from "lucide-react";

function WhyChoose() {

  const advantages = [
    {
      title: "Especializado em manutenção industrial",
      description:
        "Uma plataforma criada considerando a rotina real de fábricas, equipes de manutenção e processos industriais."
    },

    {
      title: "Controle completo dos ativos",
      description:
        "Gerencie equipamentos, componentes, histórico de intervenções e informações técnicas em uma única estrutura."
    },

    {
      title: "Redução de paradas e falhas",
      description:
        "Utilize indicadores e históricos para identificar problemas, melhorar preventivas e aumentar a disponibilidade."
    },

    {
      title: "Rastreabilidade para auditorias",
      description:
        "Tenha registros completos de serviços realizados, evidências, responsáveis e alterações do sistema."
    },

    {
      title: "Decisões baseadas em dados",
      description:
        "Transforme informações da manutenção em indicadores estratégicos como MTBF, MTTR, disponibilidade e desempenho."
    },

    {
      title: "Acesso seguro em nuvem",
      description:
        "Tenha sua manutenção conectada de qualquer lugar com usuários, permissões e informações sempre disponíveis."
    }
  ];


  return (
    <section className="bg-slate-100 py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center max-w-3xl mx-auto">

          <span className="font-semibold text-blue-600">
            Por que escolher a Claumann?
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Tecnologia aplicada à realidade industrial
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            Uma plataforma desenvolvida para transformar a manutenção
            em um processo mais organizado, previsível e eficiente.
          </p>

        </div>


        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {advantages.map((item,index)=>(
            
            <div
              key={index}
              className="
              rounded-xl 
              border 
              border-slate-200 
              bg-white 
              p-6 
              shadow-sm
              hover:shadow-lg
              transition
              "
            >

              <div className="flex items-center gap-3">

                <CheckCircle 
                  className="text-blue-600"
                  size={24}
                />

                <h3 className="text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

              </div>


              <p className="mt-4 text-slate-600 leading-relaxed">
                {item.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;