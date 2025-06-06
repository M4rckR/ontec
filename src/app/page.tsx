import { HeroCarousel } from "@/components/Hero/HeroCarousel";
import { Gallery } from "@/components/Gallery/Gallery";
import { CtaEmail } from "@/components/CtaEmail/CtaEmail";
import { CarouselItemTienda } from "@/components/CarouselItemTienda/CarouselItemTienda";
import { CarouselMarcas } from "@/components/CarouselItemTienda/CarouselMarcas";

export default function Home() {
  return (
    <>

      <header>
        <HeroCarousel />
      </header>

      <main>
        <Gallery />
        <CarouselItemTienda />
        <CarouselMarcas />
        <CtaEmail />
      </main>


    </>
  );
}
