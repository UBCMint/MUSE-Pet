import React from 'react';
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
import {useState} from 'react';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type ChartProps = {
    data: number[];
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Pet Brain Wave',
    },
  }
};



//Only works with static data for now
export const LineChart: React.FC<ChartProps> = (props) => {
  const labels = ['-20', '-15', '-10', '-5', '0'];
  const [data, setData] = useState({
    labels: labels,
    datasets: [
      {
        label: 'Beta Waves',
        data: [9, 120, 3, 242, 32, 32],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Alpha Waves',
        data: [9, 12, 50, 542, 32, 32],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  });
    return <Line options={options} data={data} />;
};