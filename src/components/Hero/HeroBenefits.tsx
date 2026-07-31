import { CheckCircle } from "lucide-react";

const benefits = [
  "Gestão completa de ativos",
  "Documentação técnica integrada",
  "Evidências e histórico visual",
  "Indicadores em tempo real"
];

function HeroBenefits() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">

      {benefits.map((benefit) => (
        <div
          key={benefit}
          className="flex items-center gap-3"
        >
          <CheckCircle className="flex-shrink-0 text-blue-500" />

          <span className="text-slate-300">
            {benefit}
          </span>

        </div>
      ))}

    </div>
  );
}

export default HeroBenefits;