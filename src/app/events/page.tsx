import React from 'react'
import Link from 'next/link'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const events = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <Link href={"/"}>
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                <code className="font-mono font-bold">Home</code>
              </p>
            </Link>
        </div>
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex"> 
            <Carousel>
            <CarouselPrevious/>
            <CarouselContent>
                <CarouselItem className="md:basis-1/2 lg:basis-2/3">
                    <label htmlFor=""><h2>Event 1</h2></label>
                    <img src="https://source.unsplash.com/random/800x600" alt="Event 1" />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-2/3">
                    <label htmlFor=""><h2>Event 2</h2></label>
                    <img src="https://source.unsplash.com/random/800x600" alt="Event 1" />
                </CarouselItem>
                <CarouselItem className="md:basis-1/2 lg:basis-2/3">
                    <label htmlFor=""><h2>Event 3</h2></label>
                    <img src="https://source.unsplash.com/random/800x600" alt="Event 1" />
                </CarouselItem>
            </CarouselContent>
            <CarouselNext/>
            </Carousel>
        </div>
    </main>
  )
}

export default events