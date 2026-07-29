import { Check } from "lucide-react";


const plans = [

  {
    name: "Starter",
    price: "Sob consulta",
    description:
      "Ideal para empresas que desejam iniciar a digitalização da manutenção industrial.",

    features: [
      "Abertura e fechamento de Ordens de Serviço",
      "Árvore de Equipamentos",
      "Dashboard completa",
      "Histórico de manutenção"
    ],

    highlight: false
  },


  {
    name: "Professional",
    price: "Sob consulta",
    description:
      "Para empresas que buscam controle completo da manutenção e indicadores operacionais.",

    features: [
      "Tudo do plano Starter",
      "Solicitações de manutenção",
      "Requisição de peças",
      "Relatórios semanais e mensais",
      "Indicadores MTBF e MTTR"
    ],

    highlight: true
  },


  {
    name: "Plus",
    price: "Sob consulta",
    description:
      "Solução personalizada para operações industriais com necessidades específicas.",

    features: [
      "Customizações avançadas",
      "Integrações industriais",
      "Dashboards personalizados",
      "Suporte dedicado"
    ],

    highlight: false
  }

];

function Pricing() {


return (

<section
id="planos"
className="
bg-slate-950
py-24
text-white
"
>


<div className="mx-auto max-w-7xl px-8">


<div className="text-center">


<span className="
text-blue-400
font-semibold
">
Planos
</span>


<h2 className="
mt-4
text-4xl
font-bold
">
Escolha a solução ideal para sua manutenção
</h2>


<p className="
mt-6
text-slate-300
">
Planos flexíveis para diferentes níveis de maturidade industrial.
</p>


</div>



<div className="
mt-16
grid
gap-8
lg:grid-cols-3
">


{plans.map((plan,index)=>(


<div
key={index}
className={`
rounded-3xl
p-8
border
transition

${
plan.highlight
?
"border-blue-500 bg-blue-900/20 scale-105 shadow-xl"
:
"border-slate-700 bg-slate-900"
}

`}
>


<h3 className="
text-2xl
font-bold
">
{plan.name}
</h3>


<div className="
mt-6
text-4xl
font-bold
">
{plan.price}

</div>


<p className="
mt-4
text-slate-300
">
{plan.description}
</p>



<div className="
mt-6
text-sm
text-blue-300
">

</div>



<ul className="
mt-8
space-y-4
">


{plan.features.map((feature,i)=>(

<li
key={i}
className="
flex
gap-3
items-center
"
>

<Check
size={20}
className="text-blue-400"
/>

<span>
{feature}
</span>


</li>

))}


</ul>



<button
className={`
mt-10
w-full
rounded-xl
py-3
font-semibold
transition

${
plan.highlight
?
"bg-blue-600 hover:bg-blue-500"
:
"bg-slate-800 hover:bg-slate-700"
}

`}
>

Agendar demonstração

</button>



</div>


))}


</div>


</div>


</section>

);

}


export default Pricing;