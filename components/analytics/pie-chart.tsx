'use client'

import React, { PureComponent, useState, useEffect } from 'react';
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS2021 = [
    "#ccfbf1",
    "#99f6e4",
    "#5eead4",
    "#2dd4bf",
    "#14b8a6",
    "#0d9488",
    "#0f766e",
    "#115e59",
    "#134e4a",
    "#042f2e",
    "#ecfeff",
    "#cffafe",
    "#a5f3fc",
    "#67e8f9",
    "#22d3ee",
    "#06b6d4",
    "#0891b2",
    "#0e7490",
    "#155e75",
    "#164e63",
    "#083344",
    "#f0f9ff",
    "#e0f2fe",
    "#bae6fd",
    "#7dd3fc",
    "#38bdf8",
    "#0ea5e9",
    "#0284c7",
    "#0369a1",
    "#075985",
    "#0c4a6e",
    "#082f49",
    "#eff6ff",
    "#dbeafe",
    "#bfdbfe",
];

const COLORS2022 = [
    "#4338ca",
    "#3730a3",
    "#312e81",
    "#1e1b4b",
    "#f5f3ff",
    "#ede9fe",
    "#ddd6fe",
    "#c4b5fd",
    "#a78bfa",
    "#8b5cf6",
    "#7c3aed",
    "#6d28d9",
    "#5b21b6",
    "#4c1d95",
    "#2e1065",
    "#faf5ff",
    "#f3e8ff",
    "#e9d5ff",
    "#d8b4fe",
    "#c084fc",
    "#a855f7",
    "#9333ea",
    "#7e22ce",
    "#6b21a8",
    "#581c87",
    "#3b0764",
    "#fdf4ff",
    "#fae8ff",
    "#f5d0fe",
    "#f0abfc",
    "#e879f9",
    "#d946ef",
    "#c026d3",
    "#a21caf",
    "#86198f",
    "#701a75",
    "#4a044e",
    "#fdf2f8",
    "#fce7f3",
    "#fbcfe8",
    "#f9a8d4",
    "#f472b6",
    "#ec4899",
    "#db2777",
    "#be185d",
    "#9d174d",
    "#831843",
    "#500724",
    "#fff1f2",
    "#ffe4e6",
    "#fecdd3",
    "#fda4af",
]

export const PieChart2021 = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/analytics/pie-2021-gwp'); // Make sure to replace '/api/data-endpoint' with your actual API endpoint
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          const jsonData = await response.json();
          console.log(jsonData)
          setData(jsonData); // Update the state with the fetched data
        } catch (error) {
          console.error("Fetching error:", error);
        }
      };
  
      fetchData();
    }, []); // The empty array means this effect runs once after the initial render
  

    return (
      <ResponsiveContainer width="100%" height={400}>
        <PieChart 
        width={400} 
        height={400}
        >
            <Legend verticalAlign='top' />
            <Pie
                dataKey="GWP"
                nameKey="Broker Name"
                label={false}
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#f87171"
            >
                    {
                data.map((entry, index) => <Cell fill={COLORS2021[index % COLORS2021.length]}/>)
            }
            </Pie>
            <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
}



export const PieChart2022 = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/analytics/pie-2022-gwp'); // Make sure to replace '/api/data-endpoint' with your actual API endpoint
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
        <PieChart 
        width={400}
        height={400}
        >
            <Legend verticalAlign='top' />
            <Pie
                nameKey="Broker Name"
                dataKey="GWP"
                label={false}
                isAnimationActive={false}
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
                >
                    {
                    data.map((entry, index) => <Cell fill={COLORS2022[index % COLORS2021.length]}/>)
                }
            </Pie>
            <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    );
}



















































