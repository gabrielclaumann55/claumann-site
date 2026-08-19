import {
  ClipboardList,
  Settings,
  CalendarCheck,
  Package,
  BarChart3,
  ShieldCheck
} from "lucide-react";

function Modules() {
  const modules = [
    {
      icon: ClipboardList,
      title: "Manutenção",
      description:
        "Ordens de serviço, solicitações, evidências e histórico completo das intervenções."
    },
    {
      icon: Settings,
      title: "Equipamentos",
      description:
        "Árvore técnica de ativos, componentes, documentação e histórico centralizado."
    },
    {
      icon: CalendarCheck,
      title: "Planejamento",
      description:
        "Programação preventiva, recorrências, prioridades e organização das atividades."
    },
    {
      icon: Package,
      title: "Estoque",
      description:
        "Controle de peças, consumo, solicitações e vínculo com equipamentos e componentes."
    },
    {
      icon: BarChart3,
      title: "Indicadores",
      description:
        "MTBF, MTTR, disponibilidade, relatórios e informações para tomada de decisão."
    },
    {
      icon: ShieldCheck,
      title: "Gestão e Rastreabilidade",
      description:
        "Usuários, permissões, auditoria, histórico de alterações, RCA e melhoria contínua."
    }
  ];

  return (
    <section
      id="funcionalidades"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Cabeçalho */}
        <div className="mx-auto max-w-3xl text-center">

          <div className="inline-flex items-center rounded-full border border-blue-200 bg-white px-4 py-2 text-sm font-semibold text-blue-600">
            Recursos da solução
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Tudo conectado em um único ambiente
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
            Estruture os principais processos da manutenção e tenha mais
            controle sobre ativos, planejamento, materiais e indicadores.
          </p>

        </div>

        {/* Módulos */}
        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {modules.map((module) => {
            const Icon = module.icon;

            return (
              <div
                key={module.title}
                className="
                  group
                  rounded-2xl
                  border
                  border-slate-200
                  bg-white
                  p-7
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-blue-300
                  hover:shadow-xl
                  hover:shadow-slate-200/60
                "
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-100
                    bg-blue-50
                    text-blue-600
                    transition-colors
                    duration-300
                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

                <h3 className="mt-6 text-lg font-semibold text-slate-950">
                  {module.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {module.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Modules;