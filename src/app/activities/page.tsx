"use client";
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
  

const activity = () => {

  const [count, setCount] = useState(0)
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
                <CarouselItem >
                    <div className='grid  text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left'>
                        <img src="https://source.unsplash.com/random/400x300" alt="activity 1" />
                        <div>
                            <h1>activity 1</h1>
                            <h2>Description about activity 1</h2>
                            <div>
                              <div className='flex flex-row justify-evenly'>
                                <Button onClick={() => {if(count>0){setCount((count) => count - 1)}}}>-</Button>
                                <p>{count}</p>
                                <Button onClick={() => {if(count<10){setCount((count) => count + 1)}}}>+</Button>
                              </div>
                              <Dialog>
                                <DialogTrigger className="bg-primary text-primary-foreground shadow hover:bg-primary/90">Book Tickets</DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Book Entry</DialogTitle>
                                    <DialogDescription>
                                      You are booking {count} entries for activity 1
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="name" className="text-right">
                                        Name
                                      </Label>
                                      <Input id="name" type='text' className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="email" className="text-right">
                                        Email
                                      </Label>
                                      <Input id="email" type="email" className="col-span-3" />
                                    </div>
                                  </div>
                                  <Button type="submit" onClick={() => window.location.reload()}>Make Payment</Button>
                                </DialogContent>
                              </Dialog>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem >
                <div className='grid  text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left'>
                        <img src="https://source.unsplash.com/random/400x300" alt="activity 1" />
                        <div className=''>
                            <h1>activity 2</h1>
                            <h2>Description about activity 2</h2>
                            <div >
                              <div className='flex flex-row justify-evenly'>
                                <Button onClick={() => {if(count>0){setCount((count) => count - 1)}}}>-</Button>
                                <p>{count}</p>
                                <Button onClick={() => {if(count<10){setCount((count) => count + 1)}}}>+</Button>
                              </div>
                              <Dialog>
                                <DialogTrigger className="bg-primary text-primary-foreground shadow hover:bg-primary/90">Book Tickets</DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Book Entry</DialogTitle>
                                    <DialogDescription>
                                      You are booking {count} entries for activity 2
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="name" className="text-right">
                                        Name
                                      </Label>
                                      <Input id="name" type='text' className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="email" className="text-right">
                                        Email
                                      </Label>
                                      <Input id="email" type="email" className="col-span-3" />
                                    </div>
                                  </div>
                                  <Button type="submit" >Make Payment</Button>
                                </DialogContent>
                              </Dialog>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
                <CarouselItem >
                <div className='grid  text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-2 lg:text-left'>
                        <img src="https://source.unsplash.com/random/400x300" alt="activity 1" />
                        <div>
                            <h1>activity 3</h1>
                            <h2>Description about activity 3</h2>
                            <div>
                              <div className='flex flex-row justify-evenly'>
                                <Button onClick={() => {if(count>0){setCount((count) => count - 1)}}}>-</Button>
                                <p>{count}</p>
                                <Button onClick={() => {if(count<10){setCount((count) => count + 1)}}}>+</Button>
                              </div>
                              <Dialog>
                                <DialogTrigger className="bg-primary p-10 text-primary-foreground shadow hover:bg-primary/90">Book Tickets</DialogTrigger>
                                <DialogContent>
                                  <DialogHeader>
                                    <DialogTitle>Book Entry</DialogTitle>
                                    <DialogDescription>
                                      You are booking {count} entries for activity 3
                                    </DialogDescription>
                                  </DialogHeader>
                                  <div className="grid gap-4 py-4">
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="name" className="text-right">
                                        Name
                                      </Label>
                                      <Input id="name" type='text' className="col-span-3" />
                                    </div>
                                    <div className="grid grid-cols-4 items-center gap-4">
                                      <Label htmlFor="email" className="text-right">
                                        Email
                                      </Label>
                                      <Input id="email" type="email" className="col-span-3" />
                                    </div>
                                  </div>
                                  <Button type="submit" onClick={() => window.location.reload()}>Make Payment</Button>
                                </DialogContent>
                              </Dialog>
                            </div>
                        </div>
                    </div>
                </CarouselItem>
            </CarouselContent>
            <CarouselNext/>
            </Carousel>
        </div>
    </main>
  )
}

export default activity