"use client";
import { useForm, useWatch } from 'react-hook-form';
import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ResetIcon } from '@radix-ui/react-icons';
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/database/mongoClient';

export async function GET() {
    const con = await connectToDatabase();
    return new NextResponse('connected to database');
}
export default function LoginPage(){

    const formSchema = z.object({
        email: z.string().email(),
        password: z.string().min(8),
    });

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
    });

    const email = useWatch({
        name: 'email',
        control: form.control
    });

    const password = useWatch({
        name: 'password',
        control: form.control
    });

    const handleSubmit = async (values: z.infer<typeof formSchema>) => {
        console.log(values);
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            console.log('Login successful');
        } else {
            console.log('Invalid email or password');
        }
    };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
            <Tabs defaultValue="account" className="w-[400px]">
                <TabsList>
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Signup</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Form {...form}>
                        <form onSubmit = {form.handleSubmit(handleSubmit)} className="flex flex-col align-middle gap-4">
                            <FormField control={form.control} name="email" render={({field}) => {
                                return <FormItem>
                                    <FormControl>
                                        <Input placeholder='Email Address' type='text'  {...field} />

                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }} />
                            <FormField control={form.control} name="password" render={({field}) => {
                                return <FormItem>
                                    <FormControl>
                                        <Input placeholder='Password' type='password'  {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            }} />
                            <Button className="block mx-auto" variant='default'>Login</Button>
                        </form> 
                    </Form>
                </TabsContent>
                <TabsContent value="signup">
                    <Form {...form}>
                            <form onSubmit = {form.handleSubmit(handleSubmit)} className="flex flex-col align-middle gap-4">
                                <FormField control={form.control} name="email" render={({field}) => {
                                    return <FormItem>
                                        <FormControl>
                                            <Input placeholder='Email Address' type='text'  {...field} />

                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                }} />
                                <FormField control={form.control} name="password" render={({field}) => {
                                    return <FormItem>
                                        <FormControl>
                                            <Input placeholder='Password' type='password'  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                }} />
                                <FormField control={form.control} name="password" render={({field}) => {
                                    return <FormItem>
                                        <FormControl>
                                            <Input placeholder='Confirm Password' type='password'  {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                }} />
                                <Button className="block mx-auto" variant='default'>Sign Up</Button>
                            </form> 
                        </Form>
                </TabsContent>
            </Tabs>
        </div>
    </main>
  );
};