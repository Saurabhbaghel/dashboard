'use client'

import { SelectForm } from "@/components/broker-table-dash/form"
import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '../ui/card';
import { list } from "postcss";
import { TableComponent } from "./table";

export default function Top10Brokers() {
  // const [tableResponse, setTableResponse] = useState('');
  const [tableResponse, setTableResponse] = useState([]);


  // this function updates the table
  const updateTableResponse = (tableAPIResponse) => {
    setTableResponse(tableAPIResponse);
  };

  useEffect(() => {
    const fetchDefaultData = async () => {
      const defaultData = await getDefaultTableData();
      updateTableResponse(defaultData);
    };

    fetchDefaultData();
  }, []);
return (
  <Card className="col-span-4">
  <CardHeader>
    <CardTitle className="pb-2">Top 10 Brokers</CardTitle>
    {/* <Card className="right-0"> */}
    <div className="flex items-center space-x-2">
      <SelectForm updateTable={updateTableResponse}/>
    </div>
    {/* <MarketTypeSelect /> */}
    {/* </Card> */}
  </CardHeader>
  <CardContent className="pl-2">
    {/* <Overview /> */}
    {/* <TableComponent  brokersList={tableData}/> */}
    <TableComponent brokersList={tableResponse} />
  </CardContent>
</Card>
);
}

async function getDefaultTableData() {
  const response = await fetch('/api/top-broker', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: '{"year": "2021", "marketType": "Combined"}'
  });
  const data = await response.json();
  return data;

}