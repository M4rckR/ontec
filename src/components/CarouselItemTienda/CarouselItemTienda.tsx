import { products } from "@/data/products"
import { TitleSections } from "../TitleSections"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel"
import Image from "next/image"

export const CarouselItemTienda = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-4 md:py-6 lg:py-8">
        <TitleSections className="mb-6" title="Productos más vendidos" />
        <Carousel className="w-full px-12"> 
          <CarouselContent>
            {
              products.map((product) => (
                <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/5">
                  <div className="w-full h-full relative bg-white border-2 p-3 border-m-gray-light rounded-md hover:border-m-blue-main transition-all duration-300 cursor-pointer flex flex-col justify-between">
                    <Image src={product.image} alt={product.name} width={100} height={100} className="w-full object-cover pb-2" />
                    <h3 className="text-sm text-black">{product.name}</h3>
                    <button className="bg-m-blue-main w-full text-white px-4 py-2 rounded-md mt-4">
                      Comprar
                    </button>
                    {
                      product.discount && (
                        <div className="absolute top-4 right-4 bg-m-blue-main text-white px-2 py-1 rounded-md">
                          {product.discount}%
                        </div>
                      )
                    }
                  </div>
                </CarouselItem>
              ))
            }
          </CarouselContent>
          <CarouselNext  className="right-2"/>
          <CarouselPrevious className="left-2"/>
        </Carousel>
      </div>
    </>
  )
}
