import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.webp";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const platformUrl = "http://claumann.base44.app/";

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-slate-800/50 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">

        {/* Logo */}
        <a
          href="#"
          className="flex items-center transition-transform duration-300 hover:scale-[1.02]"
        >
          <img
            src={logo}
            alt="Claumann Sistemas Integrados"
            className="
              h-16
              w-auto
              object-contain
              sm:h-20
              lg:h-24
              xl:h-28
            "
          />
        </a>

        {/* Botão Desktop */}
        <div className="hidden lg:block">
          <a
            href={platformUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="
              rounded-xl
              bg-blue-600
              px-7
              py-3
              font-semibold
              text-white
              shadow-lg
              shadow-blue-600/30
              transition-all
              duration-300
              hover:-translate-y-1
              hover:bg-blue-500
              hover:shadow-blue-500/40
            "
          >
            Acessar Plataforma
          </a>
        </div>

        {/* Menu Mobile */}
        <button
          className="text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Abrir menu"
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-900/95 px-6 py-6 backdrop-blur-xl lg:hidden">

          <nav className="flex flex-col gap-5">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white"
            >
              Início
            </a>

            <a
              href="#funcionalidades"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white"
            >
              Funcionalidades
            </a>

            <a
              href="#dashboard"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white"
            >
              Dashboard
            </a>

            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="text-lg text-white"
            >
              Contato
            </a>

            <a
              href={platformUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl
                bg-blue-600
                px-7
                py-3
                text-center
                font-semibold
                text-white
                shadow-lg
                shadow-blue-600/30
                transition-all
                duration-300
                hover:bg-blue-500
              "
            >
              Acessar Plataforma
            </a>

          </nav>

        </div>
      )}

    </header>
  );
}

export default Header;