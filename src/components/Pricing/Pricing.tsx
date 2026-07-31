import { Check, MessageCircle } from "lucide-react";


const plans = [

  {
    name: "Starter",
    price: "Ideal para começar",
    description:
      "Para empresas que desejam iniciar a digitalização da manutenção industrial.",

    features: [
      "Abertura e fechamento de Ordens de Serviço",
      "Árvore de Equipamentos",
      "Dashboard de manutenção",
      "Histórico dos equipamentos"
    ],

    highlight: false
  },


  {
    name: "Professional",
    price: "Mais escolhido",
    description:
      "Para empresas que buscam controle completo da manutenção e gestão por indicadores.",

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
    price: "Solução personalizada",
    description:
      "Para operações industriais que precisam de recursos avançados e adaptações específicas.",

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

const whatsappNumber = "5541997328757";


function handleWhatsApp(plan:string){

const message = encodeURIComponent(
`Olá, gostaria de conhecer o plano ${plan} da Claumann Sistemas Integrados e saber como implantar a plataforma na minha empresa.`
);


window.open(
`https://wa.me/${whatsappNumber}?text=${message}`,
"_blank"
);

}


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
Converse com nosso time e encontre o plano adequado para o nível de maturidade da sua operação.
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
text-3xl
font-bold
text-blue-400
">
{plan.price}
</div>



<p className="
mt-4
text-slate-300
">
{plan.description}
</p>




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

onClick={() => handleWhatsApp(plan.name)}

className={`

mt-10
w-full
rounded-xl
py-3
font-semibold
flex
items-center
justify-center
gap-2
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

<MessageCircle size={20}/>

Quero contratar este plano

</button>



</div>


))}


</div>



<div className="
mt-16
rounded-2xl
bg-blue-600/20
border
border-blue-500/30
p-8
text-center
">


<h3 className="
text-2xl
font-bold
">

Pronto para elevar sua manutenção?

</h3>


<p className="
mt-3
text-slate-300
">

Fale agora com nossa equipe e descubra como a Claumann pode ajudar sua empresa a reduzir falhas e aumentar a eficiência operacional.

</p>



<button

onClick={() => handleWhatsApp("implantação")}

className="
mt-6
rounded-xl
bg-blue-600
px-8
py-3
font-semibold
hover:bg-blue-500
transition
"

>

Falar com especialista

</button>


</div>


</div>


</section>

);

}


export default Pricing;