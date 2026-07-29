import { ArrowRight, CheckCircle } from "lucide-react";
import dashboard from "../../assets/images/dashboard.png";

function Hero() {
  return (
    <section className="
bg-slate-950
text-white
relative
overflow-hidden
">
  <div className="
absolute
top-0
right-0
h-[500px]
w-[500px]
rounded-full
bg-blue-600/20
blur-3xl
">
</div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-8 py-32 lg:grid-cols-2">


        {/* Texto */}
        <div className="max-w-2xl">

          <span className="
          inline-flex
          rounded-full
          border
          border-blue-500/40
          bg-blue-500/10
          px-4
          py-2
          text-sm
          text-blue-300
          ">
            Sistema inteligente de manutenção industrial
          </span>


          <h1 className="
          mt-8
          text-4xl
          font-bold
          leading-tight
          md:text-6xl
          ">
            Transforme sua manutenção em
            <span className="text-blue-500">
              {" "}dados, controle e eficiência
            </span>
          </h1>


          <p className="
          mt-6
          text-lg
          leading-relaxed
          text-slate-300
          ">
            A Claumann Sistemas Integrados conecta ordens de serviço,
            equipamentos, solicitações, indicadores e relatórios em uma
            única plataforma desenvolvida para ambientes industriais.
          </p>


          <div className="mt-8 flex flex-wrap gap-4">


          <a
  href="#dashboard"
  className="
  flex
  items-center
  gap-2
  rounded-xl
  bg-blue-600
  px-7
  py-4
  font-semibold
  hover:bg-blue-500
  transition
  "
>
  Conhecer plataforma
  <ArrowRight size={20}/>
</a>

            <a
  href="#funcionalidades"
  className="
  rounded-xl
  border
  border-slate-700
  px-7
  py-4
  font-semibold
  hover:bg-slate-800
  transition
  "
>
  Ver funcionalidades
</a>


          </div>


          <div className="mt-10 grid gap-4 sm:grid-cols-2">


            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500"/>
              <span>
                Controle completo da manutenção
              </span>
            </div>


            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500"/>
              <span>
                Indicadores MTBF e MTTR
              </span>
            </div>


            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500"/>
              <span>
                Gestão de equipamentos
              </span>
            </div>


            <div className="flex items-center gap-3">
              <CheckCircle className="text-blue-500"/>
              <span>
                Relatórios inteligentes
              </span>
            </div>


          </div>

        </div>



        {/* Dashboard */}
        <div className="
        relative
        flex
        justify-center
        ">

          <div className="
          absolute
          inset-0
          rounded-3xl
          bg-blue-600/20
          blur-3xl
          " />


          <img
            src={dashboard}
            alt="Dashboard Claumann Sistemas Integrados"
           className="
relative
w-full
max-w-xl
rounded-2xl
shadow-2xl
border
border-slate-800
"
          />

        </div>


      </div>

    </section>
  );
}

export default Hero;