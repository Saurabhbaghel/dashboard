import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function YearSelect() {
  return (
    <Select>
      <SelectTrigger className="left-0 col-span-1 w-[200px]">
        <SelectValue placeholder="2021" />
      </SelectTrigger>
      <SelectContent>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
      </SelectContent>
    </Select>
  )
}
