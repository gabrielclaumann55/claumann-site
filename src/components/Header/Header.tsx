import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const whatsappNumber = "5541997328757";

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Olá, gostaria de conhecer a Claumann Sistemas Integrados e solicitar uma demonstração."
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-6 lg:px-8">

        {/* Marca */}
        <a
          href="#"
          className="flex items-center gap-3"
          aria-label="Claumann Sistemas Integrados"
        >
          <img
            src={logo}
            alt="Claumann Sistemas Integrados"
            className="h-12 w-12 object-contain"
          />

          <div className="hidden sm:block">
            <div className="text-sm font-bold tracking-wide text-slate-900">
              CLAUMANN
            </div>

            <div className="text-[9px] font-medium uppercase tracking-[0.22em] text-blue-600">
              Sistemas Integrados
            </div>
          </div>
        </a>

        {/* Desktop */}
        <nav className="hidden items-center gap-9 lg:flex">

          <a
            href="#funcionalidades"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            Recursos
          </a>

          <a
            href="#planos"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            Planos
          </a>

          <a
            href="#contato"
            className="text-sm font-medium text-slate-600 transition-colors hover:text-blue-600"
          >
            Contato
          </a>

        </nav>

        {/* CTA Desktop */}
        <button
          type="button"
          onClick={handleWhatsApp}
          className="
            hidden
            rounded-xl
            bg-blue-600
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            shadow-sm
            transition-all
            duration-300
            hover:bg-blue-700
            lg:block
          "
        >
          Solicitar demonstração
        </button>

        {/* Mobile */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-slate-900 lg:hidden"
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {menuOpen ? <X size={27} /> : <Menu size={27} />}
        </button>

      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="border-t border-slate-200 bg-white px-6 py-6 lg:hidden">

          <nav className="flex flex-col gap-5">

            <a
              href="#"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-slate-700"
            >
              Início
            </a>

            <a
              href="#funcionalidades"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-slate-700"
            >
              Recursos
            </a>

            <a
              href="#planos"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-slate-700"
            >
              Planos
            </a>

            <a
              href="#contato"
              onClick={() => setMenuOpen(false)}
              className="font-medium text-slate-700"
            >
              Contato
            </a>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                handleWhatsApp();
              }}
              className="rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white"
            >
              Solicitar demonstração
            </button>

          </nav>

        </div>
      )}

    </header>
  );
}

export default Header;