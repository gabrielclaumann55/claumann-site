import {
  Server,
  ShieldCheck,
  Workflow,
  Factory,
  History,
  PlugZap
} from "lucide-react";

function WhyChoose() {
  const advantages = [
    {
      icon: Factory,
      title: "Desenvolvido para a indústria",
      description:
        "Uma solução pensada para a rotina de manutenção, PCM e operação industrial."
    },
    {
      icon: Server,
      title: "Implantação flexível",
      description:
        "Utilize a Claumann em ambiente On-Premise, Cloud ou Híbrido, conforme a infraestrutura da empresa."
    },
    {
      icon: ShieldCheck,
      title: "Controle e segurança",
      description:
        "Gerencie usuários, permissões e acessos mantendo as informações sob controle da organização."
    },
    {
      icon: History,
      title: "Rastreabilidade",
      description:
        "Mantenha histórico de intervenções, responsáveis, evidências e alterações relevantes para gestão e auditorias."
    },
    {
      icon: Workflow,
      title: "Processos centralizados",
      description:
        "Conecte manutenção, ativos, planejamento, estoque e indicadores em um único ambiente."
    },
    {
      icon: PlugZap,
      title: "Preparado para integração",
      description:
        "Arquitetura preparada para integração com sistemas corporativos e outras soluções utilizadas pela indústria."
    }
  ];

  return (
    <section className="bg-white py-24">

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">

        {/* Texto principal */}
        <div className="max-w-lg">

          <div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            Diferenciais
          </div>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
            Tecnologia alinhada à realidade da sua operação
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Mais do que digitalizar processos, a Claumann foi estruturada
            para oferecer controle, segurança, rastreabilidade e flexibilidade
            de implantação em ambientes industriais.
          </p>

          <div className="mt-8 rounded-2xl border border-blue-100 bg-blue-50/70 p-6">

            <p className="text-sm font-semibold text-blue-700">
              Implantação adaptável
            </p>

            <p className="mt-2 text-sm leading-6 text-slate-600">
              A solução pode ser implantada de acordo com a infraestrutura,
              políticas internas e requisitos de segurança de cada empresa.
            </p>

          </div>

        </div>

        {/* Diferenciais */}
        <div className="grid gap-x-10 gap-y-10 md:grid-cols-2">

          {advantages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group flex gap-4"
              >

                <div
                  className="
                    flex
                    h-12
                    w-12
                    flex-shrink-0
                    items-center
                    justify-center
                    rounded-xl
                    border
                    border-blue-100
                    bg-blue-50
                    text-blue-600
                    transition-all
                    duration-300
                    group-hover:bg-blue-600
                    group-hover:text-white
                  "
                >
                  <Icon size={22} strokeWidth={2} />
                </div>

                <div>

                  <h3 className="text-base font-semibold text-slate-950">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>

                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;