import {
  ClipboardList,
  Cpu,
  Package,
  BarChart3,
  Wrench,
  ShieldCheck
} from "lucide-react";


const features = [
  {
    icon: BarChart3,
    title: "Decisões baseadas em dados",
    description:
      "Transforme informações da manutenção em indicadores claros para melhorar a tomada de decisão."
  },

  {
    icon: ShieldCheck,
    title: "Maior confiabilidade operacional",
    description:
      "Reduza falhas inesperadas através de controle, histórico e acompanhamento dos equipamentos."
  },

  {
    icon: ClipboardList,
    title: "Processos padronizados",
    description:
      "Organize a rotina da manutenção através de fluxos definidos e rastreáveis."
  },

  {
    icon: Cpu,
    title: "Gestão completa dos ativos",
    description:
      "Tenha uma visão estruturada dos equipamentos, componentes e histórico de intervenções."
  },

  {
    icon: Wrench,
    title: "Melhoria contínua",
    description:
      "Identifique oportunidades de melhoria e aumente a eficiência da equipe de manutenção."
  },

  {
    icon: Package,
    title: "Controle de recursos",
    description:
      "Melhore o gerenciamento de peças e materiais utilizados nas intervenções."
  }
];

function Features() {

  return (

    <section
      id="funcionalidades"
      className="
      bg-white
      py-24
      "
    >

      <div className="mx-auto max-w-7xl px-8">


        <div className="mx-auto max-w-3xl text-center">

          <span className="
          text-blue-600
          font-semibold
          ">
            Funcionalidades
          </span>


          <h2 className="
          mt-4
          text-4xl
          font-bold
          text-slate-900
          ">
        
  Mais controle, menos paradas inesperadas
</h2>


          <p className="
          mt-6
          text-lg
          text-slate-600
          ">
            Uma plataforma desenvolvida para indústrias que precisam
            transformar dados de manutenção em decisões inteligentes.
          </p>


        </div>



        <div className="
        mt-16
        grid
        gap-8
        md:grid-cols-2
        lg:grid-cols-3
        ">


          {features.map((item, index) => {

            const Icon = item.icon;

            return (

              <div
                key={index}
                className="
                rounded-2xl
                border
                border-slate-200
                bg-white
                p-8
                shadow-sm
                hover:shadow-xl
                transition
                "
              >

                <div className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-xl
                bg-blue-100
                text-blue-600
                ">

                  <Icon size={28}/>

                </div>


                <h3 className="
                mt-6
                text-xl
                font-bold
                text-slate-900
                ">
                  {item.title}
                </h3>


                <p className="
                mt-3
                text-slate-600
                leading-relaxed
                ">
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


export default Features;