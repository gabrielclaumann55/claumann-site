import logo from "../../assets/logo.png";

function Footer() {
  return (
    <footer className="bg-slate-950 py-14 text-white">

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Marca */}
          <div>

            <div className="flex items-center gap-3">

              <img
                src={logo}
                alt="Claumann Sistemas Integrados"
                className="h-12 w-12 object-contain"
              />

              <div>
                <div className="text-sm font-bold tracking-wide text-white">
                  CLAUMANN
                </div>

                <div className="text-[9px] font-medium uppercase tracking-[0.22em] text-blue-400">
                  Sistemas Integrados
                </div>
              </div>

            </div>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Tecnologia para organizar, integrar e dar visibilidade
              à gestão industrial.
            </p>

          </div>

          {/* Navegação */}
          <div>

            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Navegação
            </h3>

            <ul className="mt-5 space-y-3 text-sm text-slate-400">

              <li>
                <a
                  href="#"
                  className="transition-colors hover:text-blue-400"
                >
                  Início
                </a>
              </li>

              <li>
                <a
                  href="#funcionalidades"
                  className="transition-colors hover:text-blue-400"
                >
                  Recursos
                </a>
              </li>

              <li>
                <a
                  href="#planos"
                  className="transition-colors hover:text-blue-400"
                >
                  Planos
                </a>
              </li>

              <li>
                <a
                  href="#contato"
                  className="transition-colors hover:text-blue-400"
                >
                  Contato
                </a>
              </li>

            </ul>

          </div>

          {/* Contato */}
          <div>

            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">
              Contato
            </h3>

            <div className="mt-5 space-y-3 text-sm text-slate-400">

              <a
                href="mailto:contato@claumannsistemas.com.br"
                className="block transition-colors hover:text-blue-400"
              >
                contato@claumannsistemas.com.br
              </a>

              <a
                href="https://www.claumannsistemas.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-colors hover:text-blue-400"
              >
                claumannsistemas.com.br
              </a>

              <span className="block">
                Claumann Sistemas Integrados
              </span>

            </div>

          </div>

        </div>

        {/* Rodapé inferior */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-7 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">

          <span>
            © 2026 Claumann Sistemas Integrados.
          </span>

          <span>
            Todos os direitos reservados.
          </span>

        </div>

      </div>

    </footer>
  );
}

export default Footer;