"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useRouter } from "next/navigation"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
    title: z.string().min(2, {
        message: "title must be at least 2 characters.",
    }),
    description: z.string().min(1),
})

export function InsertProduct() {

    const router = useRouter();

    const form = useForm({
        resolver:zodResolver(formSchema),
        defaultValues:{
            cat_title: "",
            cat_description: "",
        }
    })

    const {isSubmitting, isValid} = form.formState;

    const onSubmit = (data) => {
        // todo: insert category work
        console.log(data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 border p-3">
                <FormField
                control={form.control}
                name="cat_title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Product Title</FormLabel>
                    <FormControl>
                        <Input placeholder="enter product title" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Description</FormLabel>
                    <FormControl>
                        <Textarea placeholder="Enter Product Description" {...field} />
                    </FormControl>
                    <FormDescription>
                        Description of Product is optional
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" disabled={!isValid || isSubmitting}>Add Product</Button>
            </form>
        </Form>
    )
}
