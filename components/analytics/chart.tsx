'use client'

import React, { useState, useEffect, PureComponent } from 'react';

import {
  ComposedChart,
  BarChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const TotalGWPAndPlannedGWPChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/analytics/bar-graph-gwp'); // Make sure to replace '/api/data-endpoint' with your actual API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const jsonData = await response.json();
        setData(jsonData); // Update the state with the fetched data
      } catch (error) {
        console.error("Fetching error:", error);
      }
    };

    fetchData();
  }, []); // The empty array means this effect runs once after the initial render

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart
        width={300}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 5,
          bottom: 15,
          left: 50,
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis 
        dataKey="Broker Name" 
        // scale="band"
        tick={true}
        fontSize="15"
        angle={30}
        />
        <YAxis
        scale="linear"
        height={400}
        orientation='left'
        label={{
          value:"Premium",
          position:"left",
          angle:-90
        }}
        
        />
        <Tooltip />
        <Legend
         verticalAlign='top'
        />
        {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
        <Bar 
        dataKey="GWP" 
        barSize={25} 
        fill= "currentColor"//"#413ea0" 
        radius={3}
        />
        <Line type="monotone" dataKey="Planned GWP" stroke="#dc2626" />
        {/* <Scatter dataKey="cnt" fill="red" /> */}
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default TotalGWPAndPlannedGWPChart;