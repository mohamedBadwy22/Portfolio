import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Locale, useLocale } from "next-intl";
import Image from "next/image";

export default function ScreenshotSlider({screenshots} : {screenshots: {Src: string; Alt: string; Title: string; Description: string}[]}) {

    const locale = useLocale() as Locale;

  return (
    <>
    <Carousel dir={locale === "ar" ? "rtl" : "ltr"}
  opts={{
    direction: locale === "ar" ? "rtl" : "ltr",
  }} className="w-full sm:max-w-10/12 mx-auto my-4 select-none">
      
      <CarouselContent>
        {screenshots.map((screenshot, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card className="group/card relative aspect-video overflow-hidden border-0 p-0">
                <Image
                  src={screenshot.Src}
                  alt={screenshot.Alt}
                  loading="lazy"
                  width={1000}
                  height={800}
                  className="absolute inset-0 size-full scale-100 object-cover transition-transform duration-500 ease-in-out group-hover/card:scale-105"
                />

                {/* Background fade effects */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-black/80 to-transparent" />

                {/* Content */}
                <div className="relative flex h-full flex-col justify-end p-6">

                  <h3 className="text-xl font-bold text-white">
                    {screenshot.Title}
                  </h3>

                  <p className="text-sm text-white/90">
                    {screenshot.Description}
                  </p>

                </div>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>


      <CarouselPrevious className="cursor-pointer hidden sm:flex" />
      <CarouselNext className="cursor-pointer hidden sm:flex" />


    </Carousel>
    </>
  )
}
