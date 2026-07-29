function Stats() {
  return (
    <section className="bg-blue-600 py-20 text-white">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <h2 className="text-4xl font-bold">
            Tecnologia para uma manutenção mais eficiente
          </h2>

          <p className="mt-6 text-lg text-blue-100">
            Centralize informações, acompanhe indicadores e tenha mais controle sobre os seus ativos industriais.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="text-center">
            <h3 className="text-5xl font-bold">100%</h3>
            <p className="mt-3 text-blue-100">
              Histórico das Ordens de Serviço
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">24/7</h3>
            <p className="mt-3 text-blue-100">
              Acesso em nuvem
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">MTBF</h3>
            <p className="mt-3 text-blue-100">
              Indicadores de confiabilidade
            </p>
          </div>

          <div className="text-center">
            <h3 className="text-5xl font-bold">MTTR</h3>
            <p className="mt-3 text-blue-100">
              Indicadores de desempenho
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Stats;