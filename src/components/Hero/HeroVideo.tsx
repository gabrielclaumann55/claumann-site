import videoDemo from "../../assets/videos/apresentacao.mp4";

function HeroVideo() {
  return (
    <div className="relative">

      {/* Glow */}
      <div className="absolute inset-0 rounded-[40px] bg-blue-600/20 blur-3xl" />

      {/* Vídeo */}
      <div
        className="
          relative
          overflow-hidden
          rounded-3xl
          border
          border-slate-800
          bg-slate-900
          shadow-2xl
          transition
          duration-500
          hover:-translate-y-2
        "
      >
        <video
          src={videoDemo}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="w-full max-w-2xl"
        />
      </div>

      {/* Card superior */}
      <div
        className="
          absolute
          -top-5
          -right-5
          z-10
          rounded-2xl
          border
          border-slate-700
          bg-slate-900/90
          px-5
          py-3
          shadow-xl
          backdrop-blur
        "
      >
        <p className="text-xs text-slate-400">
          Plataforma
        </p>

        <p className="text-lg font-bold text-blue-400">
          Online
        </p>
      </div>

      {/* Card inferior */}
      <div
        className="
          absolute
          -bottom-5
          -left-5
          z-10
          rounded-2xl
          border
          border-slate-700
          bg-slate-900/90
          px-5
          py-3
          shadow-xl
          backdrop-blur
        "
      >
        <p className="text-xs text-slate-400">
          Gestão Industrial
        </p>

        <p className="text-lg font-bold text-green-400">
          Inteligente
        </p>
      </div>

    </div>
  );
}

export default HeroVideo;