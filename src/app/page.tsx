import { HeroCarousel } from "@/components/Hero/HeroCarousel";
import { HeroNav } from "@/components/Hero/HeroNav";
import { Gallery } from "@/components/Gallery/Gallery";

export default function Home() {
  return (
    <>
      <HeroNav/>  
      <HeroCarousel />
      <Gallery />
    </>
  );
}
