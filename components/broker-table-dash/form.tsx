"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { CalendarIcon, CaretSortIcon, CheckIcon } from "@radix-ui/react-icons"
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

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
  } from "@/components/ui/command"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"


// import { toast } from "@/components/ui/use-toast"

const year = [
    {label: "2021", value: "2021"},
    {label: "2022", value: "2022"},
] as const

const marketType = [
    {label: "Open Market", value: "Open Market"},
    {label: "Facilities", value: "Facilities"},
    {label: "Combined", value: "Combined"},
] as const

const TableOptionsSchema = z.object({
    year: z
        .string()
        .default('2021'),

    marketType: z
        .string()
        .default('combined')
})

export function SelectForm( {updateTable} ) {
  const form = useForm<z.infer<typeof TableOptionsSchema>>({
    resolver: zodResolver(TableOptionsSchema),
  })

  const onSubmit = async(data: z.infer<typeof TableOptionsSchema>) => {
    // toast({
    //   title: "You submitted the following values:",
    //   description: (
    //     <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
    //       <code className="text-white">{JSON.stringify(data, null, 2)}</code>
    //     </pre>
    //   ),
    // })
    const data_going_to_python = JSON.stringify(data)
    console.log(data_going_to_python)
    const response = await fetch('/api/top-broker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: data_going_to_python
    })
    const res = await response.json();
    console.log(res)
    // sending the response json to update the table
    updateTable(res)

  };

  return(
      <Form {...form}>
        {/* <div className="grid grid-cols-3 gap-4"> */}

        <form onSubmit={form.handleSubmit(onSubmit)} >
          <div className="grid grid-cols-3 gap-4">
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <div className="w-[150px]">
                <FormItem className="grid">
                  {/* <FormLabel>Year</FormLabel> */}
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="2021" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="2021">2021</SelectItem>
                      <SelectItem value="2022">2022</SelectItem>
                      {/* <SelectItem value="m@support.com">m@support.com</SelectItem> */}
                    </SelectContent>
                  </Select>
                  {/* <FormDescription>
                    You can manage email addresses in your{" "}
                    <Link href="/examples/forms">email settings</Link>.
                  </FormDescription>
                  <FormMessage /> */}
                </FormItem>
                </div>
              )}
            />
          
            <FormField
              control={form.control}
              name="marketType"
              render={({ field }) => (
                <FormItem >
                  {/* <FormLabel>Year</FormLabel> */}
                <div className="w-[150px]">
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Combined" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Combined">Combined</SelectItem>
                      <SelectItem value="Open Market">Open Market</SelectItem>
                      <SelectItem value="Facilities">Facilities</SelectItem>
                      {/* <SelectItem value="m@support.com">m@support.com</SelectItem> */}
                    </SelectContent>
                  </Select>
                </div>  
                  {/* <FormDescription>
                    You can manage email addresses in your{" "}
                    <Link href="/examples/forms">email settings</Link>.
                  </FormDescription>
                  <FormMessage /> */}
                </FormItem>
              
              
              )}
            />
          <div className="w-[100px]">
            <Button type="submit">Submit</Button>
          </div>
        </div>
        </form>
        {/* </div> */}
      </Form>
  )
}
  
