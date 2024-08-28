import heroImg from "/hero-img.png";
import banner1 from "/homeimg/banner-1.png";
import banner1sm from "/homeimg/banner-1-sm.png";
import banner2 from "/homeimg/banner-2.png";
import banner2sm from "/homeimg/banner-2-sm.png";

import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import HeroImg from "@/features/home/HeroImg";

function Hero() {
  return (
    <section className="relative mx-auto max-w-5xl px-3 sm:pb-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 4000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <div className="flex flex-col items-center bg-stone-200 px-2 py-10 sm:flex-row sm:justify-around sm:py-5">
              <div className="mb-4 flex flex-col items-center gap-2 sm:items-start">
                <div className="flex w-full items-center justify-center sm:justify-start">
                  <div className="hidden h-1 w-10 bg-stone-800 sm:block"></div>
                  <h1 className="mx-2 text-center font-calistoga text-4xl font-bold text-stone-800 lg:text-7xl">
                    Street Place
                  </h1>
                  <div className="hidden h-1 w-10 bg-stone-800 sm:block"></div>
                </div>
                <p className="text-center font-semibold tracking-wide sm:text-start md:text-xl">
                  Tudo em um só lugar
                </p>
              </div>
              <img src={heroImg} alt="" className="h-64 object-contain" />
            </div>
          </CarouselItem>

          <CarouselItem>
            <HeroImg src={banner1} srcSm={banner1sm} alt="segundo banner" />
          </CarouselItem>

          <CarouselItem>
            <HeroImg src={banner2} srcSm={banner2sm} alt="terceiro banner" />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Hero;
