import {
  Activity,
  AlertTriangle,
  CalendarCheck,
  Clock,
  Factory,
  Wrench
} from "lucide-react";


function DashboardPreview() {


  const indicators = [
    {
      title: "Equipamentos ativos",
      value: "548",
      icon: Factory
    },
    {
      title: "O.S abertas",
      value: "24",
      icon: Wrench
    },
    {
      title: "Disponibilidade",
      value: "96,8%",
      icon: Activity
    },
    {
      title: "OEE",
      value: "91,4%",
      icon: Clock
    }
  ];


  const critical = [
    {
      name: "Forno Wafer Trento",
      status: "Alta criticidade"
    },
    {
      name: "Linha Choco Tube",
      status: "Média criticidade"
    },
    {
      name: "Bibs Stick",
      status: "Normal"
    }
  ];


  const preventive = [
    "Inspeção sistema térmico - Forno Trento",
    "Lubrificação linha Choco Tube",
    "Calibração sensores de temperatura"
  ];


  return (

    <section
      id="dashboard"
      className="
      bg-slate-950
      py-24
      text-white
      "
    >

      <div className="
      mx-auto
      max-w-7xl
      px-8
      ">


        <div>

          <span className="
          font-semibold
          text-blue-400
          ">
            Dashboard operacional
          </span>


          <h2 className="
          mt-4
          text-4xl
          font-bold
          ">
            Indicadores da manutenção em tempo real
          </h2>


          <p className="
          mt-4
          max-w-3xl
          text-lg
          text-slate-300
          ">
            Tenha uma visão completa dos ativos,
            paradas, ordens de serviço e desempenho
            da manutenção industrial.
          </p>

        </div>



        <div className="
        mt-12
        rounded-3xl
        border
        border-slate-800
        bg-slate-900
        p-8
        shadow-2xl
        ">



          {/* Cards */}

          <div className="
          grid
          gap-5
          md:grid-cols-2
          lg:grid-cols-4
          ">


          {indicators.map((item,index)=>{

            const Icon = item.icon;


            return (

              <div
              key={index}
              className="
              rounded-2xl
              border
              border-slate-700
              bg-slate-800
              p-6
              "
              >

                <Icon
                className="text-blue-400"
                size={28}
                />


                <h3 className="
                mt-5
                text-3xl
                font-bold
                ">
                  {item.value}
                </h3>


                <p className="
                mt-2
                text-slate-400
                ">
                  {item.title}
                </p>


              </div>

            )

          })}


          </div>




          {/* Área de gráficos */}

          <div className="
          mt-8
          grid
          gap-6
          lg:grid-cols-3
          ">



            <div className="
            lg:col-span-2
            rounded-2xl
            border
            border-slate-700
            p-6
            ">


              <h3 className="
              text-xl
              font-semibold
              ">
                Disponibilidade dos equipamentos
              </h3>


              <div className="
              mt-8
              flex
              items-end
              gap-4
              h-40
              ">

                {[70,85,76,92,88,96].map((height,index)=>(

                  <div
                  key={index}
                  className="
                  w-full
                  rounded-t-lg
                  bg-blue-600
                  "
                  style={{
                    height:`${height}%`
                  }}
                  />

                ))}


              </div>


            </div>





            <div className="
            rounded-2xl
            border
            border-slate-700
            p-6
            ">

              <h3 className="
              text-xl
              font-semibold
              ">
                Paradas
              </h3>


              <p className="
              mt-6
              text-4xl
              font-bold
              text-blue-400
              ">
                12h
              </p>


              <p className="
              text-slate-400
              ">
                acumuladas no mês
              </p>


            </div>


          </div>




          {/* Criticidade + Preventivas */}

          <div className="
          mt-8
          grid
          gap-6
          lg:grid-cols-2
          ">


            <div className="
            rounded-2xl
            border
            border-slate-700
            p-6
            ">


              <h3 className="
              flex
              gap-2
              items-center
              text-xl
              font-semibold
              ">

              <AlertTriangle size={22}/>

              Equipamentos críticos

              </h3>



              <div className="mt-5 space-y-3">


              {critical.map((item,index)=>(

                <div
                key={index}
                className="
                rounded-xl
                bg-slate-800
                p-4
                "
                >

                  <p className="font-semibold">
                    {item.name}
                  </p>


                  <span className="
                  text-sm
                  text-blue-400
                  ">
                    {item.status}
                  </span>


                </div>

              ))}


              </div>


            </div>





            <div className="
            rounded-2xl
            border
            border-slate-700
            p-6
            ">


              <h3 className="
              flex
              items-center
              gap-2
              text-xl
              font-semibold
              ">

              <CalendarCheck size={22}/>

              Próximas preventivas

              </h3>



              <div className="
              mt-5
              space-y-3
              ">


              {preventive.map((item,index)=>(

                <div
                key={index}
                className="
                rounded-xl
                bg-slate-800
                p-4
                text-slate-300
                "
                >

                  {item}

                </div>

              ))}


              </div>


            </div>


          </div>


        </div>


      </div>


    </section>

  );

}


export default DashboardPreview;