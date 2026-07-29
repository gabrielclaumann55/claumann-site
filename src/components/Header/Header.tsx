import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 z-50 w-full">

      <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-4 lg:px-8">

        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={logo}
            alt="Claumann Sistemas Integrados"
            className="h-12 w-auto object-contain lg:h-28"
          />
        </a>

        {/* Desktop */}
        <div className="hidden lg:block">
          <a
            href="http://claumann.base44.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            Acessar Sistema
          </a>
        </div>

        {/* Botão Mobile */}
        <button
          className="lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="border-t border-slate-800 bg-slate-950 px-6 py-6 lg:hidden">

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
  href="http://claumann.base44.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="ml-auto rounded-xl bg-blue-600 px-3 py-2 text-xs font-semibold text-white transition hover:bg-blue-500 sm:px-4 sm:text-sm lg:px-6 lg:py-3 lg:text-base"
  Acessar Sistema
</a>

{/* Menu Mobile */}
<button
  className="lg:hidden"
  onClick={() => setMenuOpen(!menuOpen)}
>
  {menuOpen ? <X size={30} /> : <Menu size={30} />}
</button>

          </nav>

        </div>
      )}

    </header>
  );
}

export default Header;