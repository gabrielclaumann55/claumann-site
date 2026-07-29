import logo from "../../assets/logo.png";

function Header() {

  return (
    <header className="absolute top-0 left-0 w-full z-50">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2">


        {/* Logo */}
       <div className="flex items-center -mt-2">

    <img
  src={logo}
  alt="Claumann Sistemas Integrados"
  className="
  h-40
  w-auto
  object-contain
  -ml-10
  "
/>
        </div>


        {/* Botão Sistema */}
        <div>

          <a
            href="http://claumann.base44.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="
            rounded-xl
            bg-blue-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-blue-500
            "
          >
            Acessar Sistema
          </a>

        </div>


      </div>

    </header>
  );
}

export default Header;