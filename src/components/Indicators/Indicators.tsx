import { Activity, Clock3, BarChart3, ShieldCheck } from "lucide-react";

function Indicators() {
  const items = [
    {
      icon: Activity,
      title: "MTBF",
      description:
        "Monitore o tempo médio entre falhas e aumente a confiabilidade dos equipamentos.",
    },
    {
      icon: Clock3,
      title: "MTTR",
      description:
        "Acompanhe o tempo médio de reparo para reduzir paradas.",
    },
    {
      icon: BarChart3,
      title: "Indicadores",
      description:
        "Visualize gráficos e métricas para apoiar decisões da manutenção.",
    },
    {
      icon: ShieldCheck,
      title: "Rastreabilidade",
      description:
        "Histórico completo das intervenções realizadas nos ativos.",
    },
  ];

  return (
    <section className="bg-slate-900 py-24 text-white">
      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-blue-400 font-semibold">
            Indicadores da Plataforma
          </span>

          <h2 className="mt-4 text-4xl font-bold">
            Gestão baseada em indicadores
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
            Acompanhe os principais indicadores da manutenção e tenha
            informações confiáveis para a tomada de decisão.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-slate-800 border border-slate-700 p-8 hover:border-blue-500 hover:-translate-y-1 transition-all"
              >

                <div className="w-14 h-14 rounded-xl bg-blue-600 flex items-center justify-center mb-6">
                  <Icon size={28} />
                </div>

                <h3 className="text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-4 text-slate-300">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}

export default Indicators;