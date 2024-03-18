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

export function TableComponent( {brokersList} ) {
    return (
        <Table>
        <TableCaption>Top 10 Brokers</TableCaption>
        <TableHeader>
            <TableRow>
            <TableHead className="w-[100px]">Year</TableHead>
            {/* <TableHead>Year</TableHead> */}
            <TableHead>Broker Name</TableHead>
            <TableHead>GWP</TableHead>
            <TableHead>Planned GWP</TableHead>
            <TableHead>Market Type</TableHead>
            <TableHead className="text-right">Percentage of GWP Difference</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {brokersList.map((broker) => (
            <TableRow>
                <TableCell className="font-medium">{broker.year}</TableCell>
                {/* <TableCell >{broker.year}</TableCell> */}
                <TableCell>{broker.broker_name}</TableCell>
                <TableCell>{broker.gwp}</TableCell>
                <TableCell>{broker.planned_gwp}</TableCell>
                <TableCell>{broker.market_type}</TableCell>
                <TableCell className="text-right">{broker.percentage_of_gwp_difference}</TableCell>
            </TableRow>
            ))}
        </TableBody>
        {/* <TableFooter>
            <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
            </TableRow>
        </TableFooter> */}
        </Table>
    )
    }
    