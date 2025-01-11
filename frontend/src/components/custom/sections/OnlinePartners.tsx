'use client'

import * as React from "react"
import { Card } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import Autoplay from 'embla-carousel-autoplay';

const logos = [
  { name: "Google", url: "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" },
  { name: "Airbnb", url: "https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png" },
  { name: "Adobe", url: "https://www.adobe.com/content/dam/cc/icons/Adobe_Corporate_Horizontal_Red_HEX.svg" },
  { name: "Amazon", url: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "Adidas", url: "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg" },
  { name: "Nike", url: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Nike_Logo.svg" },
  { name: "Microsoft", url: "/placeholder.svg?height=60&width=120" },
  { name: "Apple", url: "/placeholder.svg?height=60&width=120" },
  { name: "Facebook", url: "/placeholder.svg?height=60&width=120" },
  { name: "Twitter", url: "/placeholder.svg?height=60&width=120" },
  { name: "Netflix", url: "/placeholder.svg?height=60&width=120" },
  { name: "Spotify", url: "/placeholder.svg?height=60&width=120" },
]

const autoplayPlugin = Autoplay({ delay: 1000, stopOnInteraction: false})

export default function OnlinePartners() {
  return (
    <div className="w-full py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="section-header">
          TRUSTED ONLINE PRINTER OF CHOICE
        </h2>
        
        <Card className="border-none shadow-none section-content">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              dragFree: true,
            }}
            plugins={[autoplayPlugin]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {logos.map((logo, index) => (
                <CarouselItem key={index} className="pl-2 md:pl-4 basis-1/3 md:basis-1/4 lg:basis-1/6">
                  <div className="p-2 md:p-4">
                    <div className="flex items-center justify-center h-16 md:h-20">
                      <img
                        src={logo.url}
                        alt={`${logo.name} logo`}
                        className="max-h-full max-w-full object-contain"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </Card>
      </div>
    </div>
  )
}

