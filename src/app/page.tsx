import { HeroCarousel } from "@/components/Hero/HeroCarousel";
import { HeroNav } from "@/components/Hero/HeroNav";
import { Gallery } from "@/components/Gallery/Gallery";
import { CintilloOfert } from "@/components/Hero/CintilloOfert";
import { CtaEmail } from "@/components/CtaEmail/CtaEmail";
import { Footer } from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>

      <header>
        <CintilloOfert />
        <HeroNav/>  
        <HeroCarousel />
      </header>

      <main>
        <Gallery />
        <CtaEmail />
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
