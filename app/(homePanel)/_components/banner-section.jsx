/* eslint-disable @next/next/no-img-element */
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

const BannerSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <Carousel>
        <CarouselContent>
            <CarouselItem>
                <img src="https://picsum.photos/1200/400?id=3454" className="object-cover w-full h-[400px]" alt="banner"/>
            </CarouselItem>
            <CarouselItem>
                <img src="https://picsum.photos/1200/400?id=3455" className="object-cover w-full h-[400px]" alt="banner"/>
            </CarouselItem>
            <CarouselItem>
                <img src="https://picsum.photos/1200/400?id=3456" className="object-cover w-full h-[400px]" alt="banner"/>
            </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default BannerSection