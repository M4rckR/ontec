'use client'
import Image from "next/image"
import Fade from 'embla-carousel-fade'
import { Carousel, 
         CarouselContent, 
         CarouselItem,
         type UseEmblaCarouselType
} from "../ui/carousel"
import { useEffect, useState } from "react"
import Autoplay from 'embla-carousel-autoplay'

export const HeroCarousel = () => {
  const [api, setApi] = useState<UseEmblaCarouselType[1]>()
  const [currentSlide, setCurrentSlide] = useState(0)
  const totalSlides = 3

  useEffect(() => {
    if (!api) return
    
    const handleSelect = () => {
      setCurrentSlide(api.selectedScrollSnap())
    }

    api.on("select", handleSelect)
    return () => {
      api.off("select", handleSelect)
    }
  }, [api])

  return (
    <div className="relative">
        <Carousel 
          className="w-full" 
          setApi={setApi}
          plugins={[Fade(), Autoplay({
            delay: 5000,
          })]}
        >
            <CarouselContent>
                <CarouselItem>
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/hero/banner-1.jpg"
                            alt="Banner 1"
                            height={500}
                            width={1920}
                            className="object-cover"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/hero/banner-1.jpg"
                            alt="Banner 1"
                            height={500}
                            width={1920}
                            className="object-cover"
                        />
                    </div>
                </CarouselItem>
                <CarouselItem>
                    <div className="relative w-full h-full">
                        <Image
                            src="/images/hero/banner-1.jpg"
                            alt="Banner 1"
                            height={500}
                            width={1920}
                            className="object-cover"
                        />
                    </div>
                </CarouselItem>
            </CarouselContent>
            {/* Dots */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            currentSlide === index 
                            ? 'bg-white scale-110' 
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </Carousel>
    </div>
  )
}
