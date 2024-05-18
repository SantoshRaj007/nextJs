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
        message: "Cat title must be at least 2 characters.",
    }),
    slug: z.string().min(1),
    description: z.string().min(1),
})

export function InsertCategory() {

    const router = useRouter();

    const form = useForm({
        resolver:zodResolver(formSchema),
        defaultValues:{
            title: "",
            slug: "",
            description: "",
        }
    })

    const {isSubmitting, isValid} = form.formState;

    const onSubmit = async (data) => {
        let category = await fetch(`/api/category`, {
            method:"POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        })

        // data = await data.json();
        router.refresh();
        console.log(category.data)
    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2 border p-3">
                <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Category Title</FormLabel>
                    <FormControl>
                        <Input placeholder="enter category title" {...field} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name="slug"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Category Slug</FormLabel>
                    <FormControl>
                        <Input placeholder="enter category title" {...field} />
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
                        <Textarea placeholder="Enter Category Description" {...field} />
                    </FormControl>
                    <FormDescription>
                        Description of category is optional
                    </FormDescription>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <Button type="submit" disabled={!isValid || isSubmitting}>Submit</Button>
            </form>
        </Form>
    )
}
