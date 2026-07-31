import {
  ClipboardList,
  Settings,
  AlertTriangle,
  CalendarCheck,
  BarChart3,
  FileText,
  Camera,
  Package,
  Factory,
  Search,
  Lightbulb,
  ShieldCheck
} from "lucide-react";


function Modules() {

const modules = [
  {
    icon: ClipboardList,
    title: "Ordens de Serviço",
    description:
      "Gerencie todo o ciclo da manutenção, desde a abertura, execução, apontamentos técnicos, evidências e encerramento das atividades."
  },

  {
    icon: Settings,
    title: "Gestão de Equipamentos",
    description:
      "Organize seus ativos em uma estrutura técnica completa com árvore de equipamentos, histórico e informações dos componentes."
  },

  {
    icon: AlertTriangle,
    title: "Solicitações",
    description:
      "Centralize demandas da operação com níveis de criticidade, prioridade, acompanhamento e transformação em ordens de serviço."
  },

  {
    icon: CalendarCheck,
    title: "Planejamento Preventivo",
    description:
      "Programe manutenções preventivas, acompanhe planos de manutenção e aumente a disponibilidade dos equipamentos."
  },

  {
    icon: BarChart3,
    title: "Indicadores de Manutenção",
    description:
      "Acompanhe MTBF, MTTR, disponibilidade, desempenho da equipe e indicadores essenciais para tomada de decisão."
  },

  {
    icon: FileText,
    title: "Relatórios Gerenciais",
    description:
      "Transforme dados da manutenção em relatórios estratégicos para análise de desempenho e melhoria contínua."
  },

  {
    icon: Camera,
    title: "Evidências Fotográficas",
    description:
      "Registre antes e depois das intervenções, garantindo rastreabilidade e comprovação dos serviços realizados."
  },

  {
    icon: Package,
    title: "Controle de Estoque",
    description:
      "Gerencie peças, solicitações de materiais, consumo e disponibilidade dos itens utilizados na manutenção."
  },

  {
    icon: Factory,
    title: "Controle de Produção e OEE",
    description:
      "Monitore paradas, perdas produtivas e indicadores de eficiência para melhorar o desempenho operacional."
  },

  {
    icon: Search,
    title: "Análise de Falhas (RCA)",
    description:
      "Investigue causas raízes dos problemas e implemente ações para evitar reincidências."
  },

  {
    icon: Lightbulb,
    title: "Melhoria Contínua (Kaizen)",
    description:
      "Registre ideias de melhoria, acompanhe ações e incentive a evolução dos processos."
  },

  {
    icon: ShieldCheck,
    title: "Gestão e Auditoria",
    description:
      "Controle usuários, permissões, histórico de alterações e informações importantes para auditorias."
  }
];

return (

<section
  id="funcionalidades"
  className="bg-white py-24"
>

<div className="mx-auto max-w-7xl px-8">

<div className="max-w-3xl">

<span className="
text-blue-600
font-semibold
">
Recursos da plataforma
</span>

<h2 className="
mt-4
text-4xl
font-bold
text-slate-900
">
Tudo que sua manutenção precisa em um único sistema
</h2>

<p className="
mt-4
text-lg
text-slate-600
">
Centralize processos, equipamentos e indicadores para uma gestão
mais eficiente da manutenção industrial.
</p>

</div>


<div className="
mt-12
grid
gap-6
md:grid-cols-2
lg:grid-cols-3
">


{modules.map((module,index)=>{

const Icon = module.icon;

return (

<div
key={index}
className="
rounded-2xl
border
border-slate-200
p-8
hover:shadow-xl
transition
"
>

<div className="
mb-5
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-blue-100
text-blue-600
">

<Icon size={26}/>

</div>


<h3 className="
text-xl
font-semibold
text-slate-900
">

{module.title}

</h3>


<p className="
mt-3
text-slate-600
leading-relaxed
">

{module.description}

</p>


</div>

)

})}


</div>


</div>

</section>

)

}


export default Modules;