import { lazy, Suspense } from "react";

const HeroDesktop = lazy(() => import("./HeroDesktop"));
const HeroMobile = lazy(() => import("./HeroMobile"));

function Hero() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block">
        <Suspense fallback={null}>
          <HeroDesktop />
        </Suspense>
      </div>


      {/* Mobile */}
      <div className="lg:hidden">
        <Suspense fallback={null}>
          <HeroMobile />
        </Suspense>
      </div>
    </>
  );
}

export default Hero;