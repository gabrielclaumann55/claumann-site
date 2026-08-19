import { MessageCircle, ArrowRight } from "lucide-react";

function FinalCTA() {
  const phone = "5541997328757";

  const message = encodeURIComponent(
    `Olá, gostaria de solicitar uma demonstração da Claumann Sistemas Integrados.

Nome:
Empresa:

Gostaria de entender como a solução pode ser aplicada à nossa operação.`
  );

  const whatsappLink = `https://wa.me/${phone}?text=${message}`;

  return (
    <section
      id="contato"
      className="bg-white py-20"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div
          className="
            relative
            overflow-hidden
            rounded-3xl
            bg-gradient-to-br
            from-blue-600
            to-blue-700
            px-6
            py-16
            text-white
            shadow-2xl
            shadow-blue-900/20
            sm:px-10
            lg:px-16
          "
        >

          {/* Decoração */}
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative mx-auto max-w-4xl text-center">

            <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50">
              Fale com a Claumann
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Veja a solução aplicada à sua operação
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg">
              Solicite uma demonstração e conheça como a Claumann pode
              centralizar processos, melhorar a rastreabilidade e ampliar
              a visibilidade da gestão industrial.
            </p>

            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-white
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-blue-700
                  shadow-lg
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-blue-50
                "
              >
                <MessageCircle size={19} />
                Solicitar demonstração
              </a>

              <a
                href="#planos"
                className="
                  group
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/30
                  bg-white/5
                  px-7
                  py-3.5
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-white/10
                "
              >
                Conhecer planos

                <ArrowRight
                  size={17}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default FinalCTA;