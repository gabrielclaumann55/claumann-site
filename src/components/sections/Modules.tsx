import {
  ClipboardList,
  Settings,
  AlertTriangle,
  CalendarCheck,
  BarChart3,
  FileText
} from "lucide-react";


function Modules() {

const modules = [
  {
    icon: ClipboardList,
    title: "Ordens de Serviço",
    description:
    "Controle completo das atividades de manutenção, desde a abertura até o encerramento."
  },

  {
    icon: Settings,
    title: "Gestão de Equipamentos",
    description:
    "Organize seus ativos através de uma estrutura técnica e histórico de intervenções."
  },

  {
    icon: AlertTriangle,
    title: "Solicitações",
    description:
    "Gerencie demandas com níveis de prioridade e acompanhamento das ações."
  },

  {
    icon: CalendarCheck,
    title: "Planejamento Preventivo",
    description:
    "Programe atividades e aumente a confiabilidade dos equipamentos."
  },

  {
    icon: BarChart3,
    title: "Indicadores",
    description:
    "Acompanhe MTBF, MTTR e dados importantes da operação."
  },

  {
    icon: FileText,
    title: "Relatórios",
    description:
    "Transforme informações da manutenção em decisões estratégicas."
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