function FinalCTA() {

  const phone = "+5541997328757";

  const message = encodeURIComponent(
`Olá, gostaria de solicitar uma demonstração do Claumann Sistemas Integrados.

Nome:
Empresa:

Gostaria de conhecer melhor a plataforma e suas funcionalidades.`
  );

  const whatsappLink = `https://wa.me/${phone}?text=${message}`;


  return (
    <section className="bg-blue-600 py-24 text-white">
      <div className="mx-auto max-w-4xl px-8 text-center">

        <h2 className="text-4xl font-bold">
          Pronto para transformar a gestão da sua manutenção?
        </h2>

        <p className="mt-6 text-lg text-blue-100">
          Conheça a Claumann Sistemas Integrados e veja como centralizar
          ordens de serviço, equipamentos, indicadores e relatórios
          em uma única plataforma.
        </p>


        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">


          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-8 py-4 font-semibold text-blue-600 transition hover:bg-slate-100"
          >
            Solicitar demonstração
          </a>


          <a
            href="#planos"
            className="rounded-xl border border-white/40 px-8 py-4 font-semibold text-white transition hover:bg-white/10"
          >
            Ver planos
          </a>


        </div>


      </div>
    </section>
  );
}

export default FinalCTA;