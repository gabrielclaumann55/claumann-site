import { MessageCircle } from "lucide-react";

function WhatsAppButton() {

  const phone = "+5541997328757";

  const message = encodeURIComponent(
    "Olá, gostaria de conhecer o Claumann Sistemas Integrados."
  );

  const link = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        justify-center
        w-16
        h-16
        rounded-full
        bg-green-500
        text-white
        shadow-xl
        hover:scale-110
        transition-transform
      "
    >

      <MessageCircle size={32}/>

    </a>
  );
}

export default WhatsAppButton;