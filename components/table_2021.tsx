import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  
  const brokers = [
    {
        "year": "2021",
        "broker_name": "Miller",
        "gwp": 528491.5776951652,
        "planned_gwp": 792737.3665427477,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "Howden",
        "gwp": 181322.50749891825,
        "planned_gwp": 271983.7612483773,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "Aon",
        "gwp": 84163.92827121721,
        "planned_gwp": 126245.89240682582,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "Besso",
        "gwp": 81961.47384816721,
        "planned_gwp": 122942.2107722508,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "Croton Stokes",
        "gwp": 988720.6725250356,
        "planned_gwp": 1483081.0087875535,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "Balance",
        "gwp": 492444.454405121,
        "planned_gwp": 738666.6816076814,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "BMS",
        "gwp": 322499.638132136,
        "planned_gwp": 483749.457198204,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "JLT",
        "gwp": 335889.4383375997,
        "planned_gwp": 503834.1575063996,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "Willis",
        "gwp": 227841.5319285896,
        "planned_gwp": 341762.29789288435,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "Aon",
        "gwp": 820441.132500566,
        "planned_gwp": 1230661.6987508489,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "Miller",
        "gwp": 121473.87111731087,
        "planned_gwp": 182210.80667596636,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "Balance",
        "gwp": 703405.8871774407,
        "planned_gwp": 1055108.830766161,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "BMS",
        "gwp": 971255.374723917,
        "planned_gwp": 1456883.0620858755,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "Convex",
        "gwp": 79609.1479216312,
        "planned_gwp": 119413.7218824468,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "Tysers",
        "gwp": 177177.89238770644,
        "planned_gwp": 265766.83858155966,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "McGill",
        "gwp": 872954.7096580191,
        "planned_gwp": 1309432.0644870286,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "Marsh",
        "gwp": 120539.93937121432,
        "planned_gwp": 180809.9090568215,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "Gallagher",
        "gwp": 108111.4883294968,
        "planned_gwp": 162167.2324942452,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "Kentro",
        "gwp": 760445.0795943625,
        "planned_gwp": 1140667.6193915438,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "Hendersons",
        "gwp": 810428.7893591184,
        "planned_gwp": 1215643.1840386775,
        "market_type": "Facilities"
    },
    {
        "year": "2021",
        "broker_name": "Gallagher",
        "gwp": 540784.5368410553,
        "planned_gwp": 811176.8052615828,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "Hendersons",
        "gwp": 405770.5522586832,
        "planned_gwp": 608655.8283880248,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "Kentro",
        "gwp": 96860.17904758116,
        "planned_gwp": 145290.26857137174,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "Convex",
        "gwp": 99861.56797281854,
        "planned_gwp": 149792.35195922782,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "Tysers",
        "gwp": 240378.8173325887,
        "planned_gwp": 360568.225998883,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "McGill",
        "gwp": 673146.5883161423,
        "planned_gwp": 1009719.8824742136,
        "market_type": "Open Market"
    },
    {
        "year": "2021",
        "broker_name": "Marsh",
        "gwp": 838710.3448602626,
        "planned_gwp": 1258065.5172903938,
        "market_type": "Open Market"
    }
]
  
  export function Table2021() {
    return (
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Year</TableHead>
            <TableHead>Broker Name</TableHead>
            <TableHead>GWP</TableHead>
            <TableHead>Planned GWP</TableHead>
            <TableHead className="text-right">Market Type</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {brokers.map((broker) => (
            <TableRow>
              <TableCell className="font-medium">{broker.year}</TableCell>
              <TableCell>{broker.broker_name}</TableCell>
              <TableCell>{broker.gwp}</TableCell>
              <TableCell>{broker.planned_gwp}</TableCell>
              <TableCell className="text-right">{broker.market_type}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter>
      </Table>
    )
  }
  