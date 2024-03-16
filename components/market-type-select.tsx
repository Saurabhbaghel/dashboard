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

export function MarketTypeSelect() {
  return (
    <Select>
      <SelectTrigger className="right-0 col-span-1 w-[200px]">
        <SelectValue placeholder="Open Type" />
      </SelectTrigger>
      <SelectContent>
            <SelectItem value="opentype">Open Type</SelectItem>
            <SelectItem value="facilities">Facilities</SelectItem>
      </SelectContent>
    </Select>
  )
}
