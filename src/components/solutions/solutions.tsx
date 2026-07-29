import "./Solutions.css";

function Solutions() {
  const solutions = [
    {
      icon: "🔧",
      title: "Ordens de Serviço",
      description:
        "Abertura, acompanhamento e fechamento de serviços com histórico completo das atividades."
    },
    {
      icon: "🏭",
      title: "Gestão de Equipamentos",
      description:
        "Organização da árvore de equipamentos, identificação técnica e histórico de manutenção."
    },
    {
      icon: "📊",
      title: "Indicadores Inteligentes",
      description:
        "Acompanhamento de indicadores como MTBF, MTTR e desempenho da manutenção."
    },
    {
      icon: "📋",
      title: "Relatórios Gerenciais",
      description:
        "Informações organizadas para apoiar decisões estratégicas da manutenção."
    },
    {
      icon: "📦",
      title: "Gestão de Peças",
      description:
        "Controle de materiais e requisições para melhorar a disponibilidade dos equipamentos."
    },
    {
      icon: "🔎",
      title: "Histórico e Rastreabilidade",
      description:
        "Registro completo das intervenções realizadas em cada equipamento."
    }
  ];

  return (
    <section className="solutions">

      <h2>
        Soluções inteligentes para manutenção industrial
      </h2>

      <p className="solutions-subtitle">
        Uma plataforma completa para organizar processos,
        reduzir falhas e aumentar a eficiência operacional.
      </p>


      <div className="solutions-grid">

        {solutions.map((item, index) => (
          <div className="solution-card" key={index}>

            <div className="solution-icon">
              {item.icon}
            </div>

            <h3>
              {item.title}
            </h3>

            <p>
              {item.description}
            </p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default Solutions;