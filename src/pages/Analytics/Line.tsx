import React, { useState, useEffect, useRef } from "react";
import { Bar, Line, Doughnut} from "react-chartjs-2";
import {Chart} from "chart.js"

import 'chart.js/auto';

const chart = ()=>{

    const chartRef:any = useRef();
  
  const [userData, setUserData] = useState({
    labels: [2018, 2019, 2020, 2021, 2022],
    datasets: [
      {
        label: "Your statistics",
        data: [202, 2032, 2302, 2012, 2022],
      },
    ],
  });

  const data = {
    labels: ['MON', 'TUE', 'WED', 'THUR', 'FRI', 'SAT','SUN'],
    datasets: [
      {
        label: "",
        data: [0, 1,1,2.2, 3, 2, 1.5, 1],
        fill: true,
        backgroundColor: 'transparent',
        borderColor: '#fff',
        tension:0.4,
        pointRadius: 0
      }
    ],
  };

  const options = {
    scales:{
        x:{
            ticks: {
                color: "#fff"
            },
            grid: {
                display: false,

            }
        },
        y:{
            ticks: {
                color: "#fff"
            },
        }
    },
    legend: {
        labels: {
          fontColor: 'blue',
        },
      },
  }
      
      return (
        <>
            <Line ref={chartRef} data={data} options={options}/>
        </>
      )
    
}

export default chart