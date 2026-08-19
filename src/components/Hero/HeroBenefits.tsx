import { CheckCircle2 } from "lucide-react";

const benefits = [
  "On-Premise, Cloud ou Híbrido",
  "Controle de usuários e acessos",
  "Rastreabilidade das operações",
  "Gestão industrial integrada"
];

function HeroBenefits() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-x-8 gap-y-4">

      {benefits.map((benefit) => (
        <div
          key={benefit}
          className="flex items-center gap-3"
        >

          <CheckCircle2
            size={19}
            className="flex-shrink-0 text-blue-600"
          />

          <span className="text-sm font-medium text-slate-600">
            {benefit}
          </span>

        </div>
      ))}

    </div>
  );
}

export default HeroBenefits;