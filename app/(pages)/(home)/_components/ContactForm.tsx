'use client';

import { Button } from '@/app/_components/Button';
import { Input } from '@/app/_components/Input';
import { Textarea } from '@/app/_components/TextArea';
import { sendEmail } from '@/app/utils/send-email';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';

import { z } from 'zod';

import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage
} from '@/app/_components/Form';

export const formSchema = z.object({
    fullname: z
        .string()
        .min(1, 'Full name is required')
        .max(100, 'Full name is too long'),
    email: z.string().email().min(5, 'Email is required'),
    message: z
        .string()
        .min(1, 'Message is required')
        .max(500, 'Message is too long')
});

export function ContactForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullname: '',
            email: '',
            message: ''
        }
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        toast.success('Sending....', {
            icon: '◌'
        });

        sendEmail(values);
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
                <div className="flex flex-col gap-[1rem] text-text/60">
                    <FormField
                        control={form.control}
                        name="fullname"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input
                                        placeholder="Full Name*"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Input placeholder="Email*" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                            <FormItem>
                                <FormControl>
                                    <Textarea
                                        placeholder="Write your message..."
                                        className="h-[14rem]"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>
                <Button
                    type="submit"
                    className="mt-[1rem] !h-[5.2rem] w-full text-[1.6rem] font-[500]"
                >
                    Submit
                </Button>
            </form>
        </Form>
    );
}
