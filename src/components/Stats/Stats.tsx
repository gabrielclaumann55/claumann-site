function Stats() {
  const stats = [
    {
      value: "+500",
      title: "Equipamentos gerenciados",
      description:
        "Organize seus ativos industriais com histórico técnico completo e rastreabilidade."
    },

    {
      value: "+10.000",
      title: "Ordens de Serviço",
      description:
        "Controle atividades de manutenção, execução, evidências e encerramentos."
    },

    {
      value: "24/7",
      title: "Acesso à plataforma",
      description:
        "Informações disponíveis em nuvem para equipes de manutenção e gestão."
    },

    {
      value: "MTBF",
      title: "Confiabilidade dos ativos",
      description:
        "Analise falhas e acompanhe indicadores para melhorar a disponibilidade."
    }
  ];

  return (
    <section className="bg-blue-600 py-20 text-white">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold">
            Uma plataforma preparada para a indústria
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Centralize equipamentos, processos e indicadores em um único
            ambiente para uma gestão de manutenção mais eficiente.
          </p>

        </div>


        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((stat, index) => (

            <div
              key={index}
              className="
                text-center
                rounded-2xl
                bg-blue-500/30
                p-8
                border
                border-blue-400/30
                hover:bg-blue-500/40
                transition
              "
            >

              <h3 className="text-5xl font-bold">
                {stat.value}
              </h3>


              <p className="mt-3 text-xl font-semibold">
                {stat.title}
              </p>


              <p className="mt-3 text-blue-100 leading-relaxed">
                {stat.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Stats;