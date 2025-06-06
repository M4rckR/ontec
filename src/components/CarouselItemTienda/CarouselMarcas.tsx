import Image from "next/image"
import { TitleSections } from "../TitleSections"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"

export const CarouselMarcas = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8">
      <TitleSections className="mb-3" title="Tus marcas favoritas" />

      <Carousel className="w-full px-12"> 
        <CarouselContent>
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6 my-2">
            <div className="border-black border-1 rounded-lg shadow-lg flex justify-center items-center min-h-16">
                <Image src="/images/marcas/logo-canon.png" alt="Marca 1" width={140} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6 my-2">
            <div className="flex justify-center items-center min-h-16 border-black border-1 rounded-lg shadow-lg">
                <Image src="/images/marcas/logo-corsair.png" alt="Marca 1" width={140} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6 my-2">
            <div className="flex justify-center items-center min-h-16 border-black border-1 rounded-lg shadow-lg">
                <Image src="/images/marcas/logo-asus.png" alt="Marca 1" width={140} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6 my-2">
            <div className="flex justify-center items-center min-h-16 border-black border-1 rounded-lg shadow-lg">
                <Image src="/images/marcas/logo-samsung.png" alt="Marca 1" width={140} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6 my-2">
            <div className="flex justify-center items-center min-h-16 border-black border-1 rounded-lg shadow-lg">
                <Image src="/images/marcas/logo-antryx.png" alt="Marca 1" width={140} height={100} />
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/2 md:basis-1/3 lg:basis-1/6 my-2">
            <div className="flex justify-center items-center min-h-16 border-black border-1 rounded-lg shadow-lg">
                <Image src="/images/marcas/logo-msi.png" alt="Marca 1" width={140} height={100} />
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="absolute top-1/2 -translate-y-1/2 right-2" />
        <CarouselPrevious className="absolute top-1/2 -translate-y-1/2 left-2" />
      </Carousel>
    </div>
  )
}
