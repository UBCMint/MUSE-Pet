//template code
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  RadarController,
  RadialLinearScale,
  Title,
  Tooltip,
  Legend
} from 'chart.js';
import {useState} from 'react';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    RadarController,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend
  );

type ChartProps = {
    data: number[];
};

//Only works with static data for now
export const RadarChart: React.FC<ChartProps> = (props) => {
    
    const labels = ['Delta', 'Theta', 'Alpha', 'Sigma', 'Beta'];
    const [data, setData] = useState({
      labels: labels,
      datasets: [{
        label: 'Brainwaves',
        data: props.data,
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        borderWidth: 5
      }]
    });

    return <Radar data={data} />;
};