'use client'

import React, { PureComponent } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"



const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const BrokerNames = z.object({
    brokerName: z
        .string()
        .default('Gallagher'),

})

export function SelectForm( {updateTable} ) {
  const form = useForm<z.infer<typeof BrokerNames>>({
    resolver: zodResolver(BrokerNames),
  })

  const onSubmit = async(data: z.infer<typeof BrokerNames>) => {
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

const Example = () => {

    return (
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="pv" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
          <Bar dataKey="uv" fill="#82ca9d" activeBar={<Rectangle fill="gold" stroke="purple" />} />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default Example;
  