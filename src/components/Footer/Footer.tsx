function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">

      <div className="mx-auto max-w-7xl px-8">

        <div className="grid gap-12 md:grid-cols-3">

          <div>
            <h2 className="text-2xl font-bold text-blue-500">
              Claumann Sistemas Integrados
            </h2>

            <p className="mt-4 text-slate-400 leading-relaxed">
              Plataforma desenvolvida para transformar a gestão da manutenção
              industrial através de tecnologia, indicadores e organização.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Plataforma
            </h3>

            <ul className="mt-4 space-y-3 text-slate-400">

              <li>Ordens de Serviço</li>

              <li>Gestão de Equipamentos</li>

              <li>Solicitações</li>

              <li>Indicadores</li>

              <li>Relatórios</li>

            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">
              Contato
            </h3>

            <div className="mt-4 space-y-3 text-slate-400">

              <p>contato@claumannsistemas.com.br</p>

              <p>www.claumannsistemas.com.br</p>

              <p>LinkedIn / Claumann Sistemas Integrados</p>

            </div>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-slate-500">

          © 2026 Claumann Sistemas Integrados. Todos os direitos reservados.

        </div>

      </div>

    </footer>
  );
}

export default Footer;