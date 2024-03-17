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



// export default class TotalGWPAndPlannedGWPChart extends PureComponent {
//   constructor(props) {
//     super(props);
//     // Initialize the component state with an empty data array
//     this.state = {
//       data: [],
//     };
//   }

//   // Fetch the data when the component mounts
//   componentDidMount() {
//     this.fetchData();
//   }

//   fetchData = async () => {
//     try {
//       // Replace '/api/data-endpoint' with your actual API URL
//       console.log('Giving request')
//       const response = await fetch('/api/analytics/bar-graph-gwp');
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       }
//       const data = await response.json();
//       console.log(data)
//       // Update the component's state with the fetched data
//       this.setState({ data }), () => console.log(this.state.data);
//     } catch (error) {
//       console.error("Fetching error:", error);
//     }
//   }

//   render() {
//     // Use the state data for the chart
//     const { data } = this.state;

//     return (
//       <ResponsiveContainer width="100%" height="100%" className={"size-auto"}>
//         <ComposedChart
//           width={100}
//           height={100}
//           data={data}
//           margin={{
//             top: 10,
//             right: 5,
//             bottom: 10,
//             left: 5,
//           }}
//         >
//           {/* <CartesianGrid stroke="#f5f5f5" /> */}
//           <XAxis dataKey="Name" scale="band" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           {/* <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" /> */}
//           <Bar dataKey="GWP" barSize={10} fill="#413ea0" />
//           <Line type="monotone" dataKey="Planned GWP" stroke="#ff7300" />
//           {/* <Scatter dataKey="cnt" fill="red" /> */}
//         </ComposedChart>
//       </ResponsiveContainer>
//     );
//   }
// }

// export default class TotalGWPAndPlannedGWPChart extends PureComponent {
//   // static demoUrl = 'https://codesandbox.io/s/simple-composed-chart-h9zif';

//   render() {
//     return (
//       <ResponsiveContainer width="100%" height="100%">
//         <ComposedChart
//           width={500}
//           height={400}
//           data={data}
//           margin={{
//             top: 20,
//             right: 20,
//             bottom: 20,
//             left: 20,
//           }}
//         >
//           <CartesianGrid stroke="#f5f5f5" />
//           <XAxis dataKey="name" scale="band" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Area type="monotone" dataKey="amt" fill="#8884d8" stroke="#8884d8" />
//           <Bar dataKey="pv" barSize={20} fill="#413ea0" />
//           <Line type="monotone" dataKey="uv" stroke="#ff7300" />
//           <Scatter dataKey="cnt" fill="red" />
//         </ComposedChart>
//       </ResponsiveContainer>
//     );
//   }
// }

