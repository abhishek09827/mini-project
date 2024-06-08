import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);
import { jsonData, jsonTwitterData } from './data/data';
import { useEffect } from 'react';

const instaData = () => {
    fetch('https://instagram-statistics-api.p.rapidapi.com/statistics/retrospective?cid=INST%3A17841400005463628&from=01.09.2022&to=03.09.2022')
      .then(response => response.json())
      .then(data => {
        if (data.meta.code === 200) {
            setInstaEngData(data);
        } else {
          console.error('Failed to fetch data', data.meta.message);
        }
      })
      .catch(error => console.error('Error fetching data:', error));
  }
// useEffect(() => {instaData}, [])
const EngagementChart = ({ data, platform }) => {
  if (platform === 'instagram') {
    data = jsonData
  }
  else{
    data = jsonTwitterData
  }
const [instaEngData, setInstaEngData] = useState(data)
  
  const currentData = data.data.series.current;
  const prevData = data.data.series.prev;

  const dates = currentData.map(item => item.date);

  const currentER = currentData.map(item => item.er);
  const prevER = prevData.map(item => item.er);

  const currentInteractions = currentData.map(item => item.deltaInteractions);
  const prevInteractions = prevData.map(item => item.deltaInteractions);

  const chartData = {
    labels: dates,
    datasets: [
      {
        label: 'Current ER',
        data: currentER,
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        yAxisID: 'y1',
      },
      {
        label: 'Previous ER',
        data: prevER,
        borderColor: 'rgba(153, 102, 255, 1)',
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        yAxisID: 'y1',
      },
      {
        label: 'Current Interactions',
        data: currentInteractions,
        borderColor: 'rgba(255, 159, 64, 1)',
        backgroundColor: 'rgba(255, 159, 64, 0.2)',
        yAxisID: 'y2',
      },
      {
        label: 'Previous Interactions',
        data: prevInteractions,
        borderColor: 'rgba(54, 162, 235, 1)',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        yAxisID: 'y2',
      },
    ],
  };

  const options = {
    responsive: true,
    interaction: {
      mode: 'index',
      intersect: false,
    },
    stacked: false,
    scales: {
      y1: {
        type: 'linear',
        display: true,
        position: 'left',
      },
      y2: {
        type: 'linear',
        display: true,
        position: 'right',

        // grid line settings
        grid: {
          drawOnChartArea: false, // only want the grid lines for one axis to show up
        },
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default EngagementChart;
