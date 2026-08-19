import {
  Check,
  MessageCircle,
  ArrowRight
} from "lucide-react";

const plans = [
  {
    name: "Starter",
    label: "Essencial",
    description:
      "Para empresas que desejam estruturar e digitalizar os principais processos da manutenção.",

    features: [
      "Ordens de Serviço",
      "Árvore de Equipamentos",
      "Planejamento de manutenção",
      "Estoque e requisições"
    ],

    highlight: false
  },

  {
    name: "Professional",
    label: "Recomendado",
    description:
      "Para operações que precisam ampliar o controle, a rastreabilidade e a gestão por indicadores.",

    features: [
      "Tudo do plano Starter",
      "Solicitações de manutenção",
      "Indicadores e relatórios",
      "Recursos avançados de gestão"
    ],

    highlight: true
  },

  {
    name: "Plus",
    label: "Avançado",
    description:
      "Para empresas que precisam integrar outras áreas, processos e necessidades específicas da operação.",

    features: [
      "Tudo do plano Professional",
      "RCA e melhoria contínua",
      "Produção e OEE",
      "Integrações e customizações"
    ],

    highlight: false
  }
];

function Pricing() {
  const whatsappNumber = "5541997328757";

  function handleWhatsApp(plan: string) {
    const message = encodeURIComponent(
      `Olá, gostaria de conhecer o plano ${plan} da Claumann Sistemas Integrados e solicitar uma proposta para minha empresa.`
    );

    window.open(
      `https://wa.me/${whatsappNumber}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  }

  return (
    <section
      id="planos"
      className="relative bg-slate-950 text-white"
    >

      {/* Transição superior: branco → azul-marinho */}
      <div
        className="
          h-28
          bg-gradient-to-b
          from-white
          via-blue-950/60
          to-slate-950
        "
      />

      {/* Conteúdo principal */}
      <div className="relative overflow-hidden pb-24 pt-16">

        {/* Glow direito */}
        <div
          className="
            pointer-events-none
            absolute
            -right-40
            top-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-blue-600/10
            blur-[150px]
          "
        />

        {/* Glow esquerdo */}
        <div
          className="
            pointer-events-none
            absolute
            -left-40
            bottom-0
            h-[400px]
            w-[400px]
            rounded-full
            bg-blue-500/5
            blur-[130px]
          "
        />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">

          {/* Cabeçalho */}
          <div className="mx-auto max-w-3xl text-center">

            <div
              className="
                inline-flex
                items-center
                rounded-full
                border
                border-blue-500/20
                bg-blue-500/10
                px-4
                py-2
                text-sm
                font-semibold
                text-blue-400
              "
            >
              Planos
            </div>

            <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
              Uma solução para cada nível de operação
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
              Escolha a estrutura mais adequada para sua empresa.
              O escopo é definido de acordo com os módulos, infraestrutura
              e necessidades da operação.
            </p>

          </div>

          {/* Cards */}
          <div className="mt-16 grid gap-6 lg:grid-cols-3">

            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`
                  relative
                  flex
                  flex-col
                  rounded-3xl
                  border
                  p-8
                  transition-all
                  duration-300
                  ${
                    plan.highlight
                      ? "border-blue-500 bg-blue-600/[0.08] shadow-2xl shadow-blue-950/40 lg:-translate-y-3"
                      : "border-slate-800 bg-slate-900/70 hover:border-slate-700"
                  }
                `}
              >

                {/* Destaque */}
                {plan.highlight && (
                  <div
                    className="
                      absolute
                      -top-3
                      left-1/2
                      -translate-x-1/2
                      rounded-full
                      bg-blue-600
                      px-4
                      py-1.5
                      text-xs
                      font-semibold
                      text-white
                      shadow-lg
                    "
                  >
                    Mais indicado
                  </div>
                )}

                {/* Plano */}
                <div className="text-sm font-semibold text-blue-400">
                  {plan.label}
                </div>

                <h3 className="mt-3 text-2xl font-bold text-white">
                  {plan.name}
                </h3>

                <p className="mt-4 min-h-[72px] text-sm leading-6 text-slate-400">
                  {plan.description}
                </p>

                {/* Investimento */}
                <div className="mt-6 border-y border-slate-800 py-5">

                  <span className="text-xs uppercase tracking-wider text-slate-500">
                    Investimento
                  </span>

                  <p className="mt-1 text-xl font-semibold text-white">
                    Sob consulta
                  </p>

                </div>

                {/* Recursos */}
                <ul className="mt-7 flex-1 space-y-4">

                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3"
                    >

                      <div
                        className="
                          mt-0.5
                          flex
                          h-5
                          w-5
                          flex-shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-blue-500/10
                        "
                      >
                        <Check
                          size={13}
                          strokeWidth={3}
                          className="text-blue-400"
                        />
                      </div>

                      <span className="text-sm leading-6 text-slate-300">
                        {feature}
                      </span>

                    </li>
                  ))}

                </ul>

                {/* CTA */}
                <button
                  type="button"
                  onClick={() => handleWhatsApp(plan.name)}
                  className={`
                    group
                    mt-8
                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2
                    rounded-xl
                    px-5
                    py-3.5
                    text-sm
                    font-semibold
                    transition-all
                    duration-300
                    ${
                      plan.highlight
                        ? "bg-blue-600 text-white hover:bg-blue-500"
                        : "border border-slate-700 bg-slate-800/50 text-white hover:border-blue-500/50 hover:bg-slate-800"
                    }
                  `}
                >

                  {plan.highlight ? (
                    <MessageCircle size={18} />
                  ) : (
                    <ArrowRight
                      size={18}
                      className="
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />
                  )}

                  Solicitar proposta

                </button>

              </div>
            ))}

          </div>

          {/* Observação */}
          <div
            className="
              mx-auto
              mt-12
              max-w-3xl
              border-t
              border-slate-800
              pt-8
              text-center
            "
          >
            <p className="text-sm leading-6 text-slate-500">
              A composição final pode variar conforme módulos contratados,
              número de usuários, modelo de implantação, integrações e
              necessidades específicas da operação.
            </p>
          </div>

        </div>

      </div>

      {/* Transição inferior: azul-marinho → branco */}
      <div
        className="
          h-32
          bg-gradient-to-b
          from-slate-950
          via-blue-950/50
          to-white
        "
      />

    </section>
  );
}

export default Pricing;