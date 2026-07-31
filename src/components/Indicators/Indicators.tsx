import {
  Activity,
  Clock3,
  BarChart3,
  ShieldCheck,
  Gauge,
  DollarSign,
  Users,
  Wrench
} from "lucide-react";
function Indicators() {
 const items = [
  {
    icon: Activity,
    title: "MTBF",
    description:
      "Analise o tempo médio entre falhas e identifique oportunidades para aumentar a confiabilidade dos equipamentos.",
  },

  {
    icon: Clock3,
    title: "MTTR",
    description:
      "Monitore o tempo médio de reparo e reduza o impacto das paradas no processo produtivo.",
  },

  {
    icon: Gauge,
    title: "Disponibilidade",
    description:
      "Acompanhe a disponibilidade dos ativos e visualize quais equipamentos impactam sua operação.",
  },

  {
    icon: BarChart3,
    title: "OEE e Performance",
    description:
      "Avalie eficiência operacional, perdas produtivas e principais causas de paradas.",
  },

  {
    icon: Wrench,
    title: "Preventiva x Corretiva",
    description:
      "Compare a evolução das manutenções preventivas e corretivas para melhorar o planejamento.",
  },

  {
    icon: DollarSign,
    title: "Custos da Manutenção",
    description:
      "Tenha visibilidade dos recursos utilizados, peças consumidas e investimentos realizados.",
  },

  {
    icon: Users,
    title: "Performance da Equipe",
    description:
      "Acompanhe produtividade, tempo de atendimento e execução das atividades da manutenção.",
  },

  {
    icon: ShieldCheck,
    title: "Rastreabilidade Total",
    description:
      "Tenha histórico completo dos equipamentos, intervenções, usuários e alterações realizadas.",
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
            Decisões baseadas em dados reais
          </h2>

          <p className="mt-6 text-slate-300 text-lg">
           Transforme dados da manutenção em informações estratégicas para reduzir falhas, aumentar disponibilidade e melhorar continuamente seus processos.
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