function Results() {
  return (
    <section className="bg-white py-24">

      <div className="mx-auto max-w-7xl px-8">

        <div className="text-center">

          <span className="font-semibold text-blue-600">
            Resultados
          </span>

          <h2 className="mt-4 text-4xl font-bold text-slate-900">
            Mais organização. Mais produtividade. Mais controle.
          </h2>

          <p className="mt-6 text-lg text-slate-600">
            A Claumann Sistemas Integrados ajuda sua equipe a transformar a
            manutenção em um processo organizado e orientado por dados.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          <div className="rounded-2xl border border-slate-200 p-8">

            <h3 className="text-2xl font-bold text-blue-600">
              Menos Paradas
            </h3>

            <p className="mt-4 text-slate-600">
              Planeje melhor as atividades preventivas e reduza falhas inesperadas.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 p-8">

            <h3 className="text-2xl font-bold text-blue-600">
              Mais Controle
            </h3>

            <p className="mt-4 text-slate-600">
              Centralize Ordens de Serviço, equipamentos, peças e indicadores.
            </p>

          </div>

          <div className="rounded-2xl border border-slate-200 p-8">

            <h3 className="text-2xl font-bold text-blue-600">
              Decisões Inteligentes
            </h3>

            <p className="mt-4 text-slate-600">
              Utilize dashboards e relatórios para apoiar a gestão da manutenção.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Results;