'use client'

import React, { useState, useEffect } from 'react';
import { TableComponent } from './table';
import { MarketTypeSelect } from './market-type-select';
import { YearSelect } from './year-select';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from './ui/card';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import TableOptionsForm from './broker-table-dash/page';

//         "year": "2021",
//         "broker_name": "Marsh",
//         "gwp": 838710.3448602626,
//         "planned_gwp": 1258065.5172903938,
//         "market_type": "Open Market"
//     }
// ]





export default function TopBrokerTableMain() {
  const [dropdownYearValue, setDropdownYearValue] = useState('');
  const [dropdownMarketTypeValue, setDropdownMarketTypeValue] = useState('');
  const [tableData, setTableData] = useState([]);

  // Your initial data or fetch it from an API
  // const initialTableData = ;
  const handlesSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    console.log(`${value}`)
    setDropdownYearValue(value);
  };

  const fetchData = async () => {
    //   return item.dropdownOneCriteria === dropdownOneValue && item.dropdownTwoCriteria === dropdownTwoValue;
      const response = await fetch('/api/top-broker', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            year: dropdownYearValue, 
            market_type: dropdownMarketTypeValue
          })
      })
        console.log("In TopBrokerTableMain")
        const res = await response.json();
        setTableData(res);
      };

  const handleButtonClick = async () => {
    console.log('In handleButton')
    fetchData();
  }
  useEffect(() => {
    // Filter or modify your table data based on dropdown values
    // This is just a placeholder logic
      console.log('abc');
      fetchData();
  }, [dropdownYearValue, dropdownMarketTypeValue]);


  // return (
  //   <div>
  //     <select value={dropdownOneValue} onChange={e => setDropdownOneValue(e.target.value)}>
  //       {/* Option values for dropdown one */}
  //     </select>
      
  //     <select value={dropdownTwoValue} onChange={e => setDropdownTwoValue(e.target.value)}>
  //       {/* Option values for dropdown two */}
  //     </select>
      
  //     {/* Render your table here based on tableData */}
  //   </div>
  // );

  return (
      <Card className="col-span-4">
      <CardHeader>
        <CardTitle className="pb-2">Overview</CardTitle>
        {/* <Card className="right-0"> */}
        <div className="flex items-center space-x-2">
          <TableOptionsForm />
        </div>
        {/* <MarketTypeSelect /> */}
        {/* </Card> */}
      </CardHeader>
      <CardContent className="pl-2">
        {/* <Overview /> */}
        <TableComponent  brokersList={tableData}/>
      </CardContent>
    </Card>
  );
}




//         "year": "2021",
//         "broker_name": "Marsh",
//         "gwp": 838710.3448602626,
//         "planned_gwp": 1258065.5172903938,
//         "market_type": "Open Market"
//     }
// ]

