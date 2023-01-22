//template code
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { useState } from 'react';
import { Bar } from 'react-chartjs-2';

  

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

type ChartProps = {
  data: number[];
};

//Only works with static data for now
export const BrainChart: React.FC<ChartProps> = (props) => {
  const labels = ['Delta', 'Theta', 'Alpha', 'Sigma', 'Beta'];
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'Brainwaves',
      data: props.data,
      backgroundColor: [
        'rgb(255, 255, 255)'
      ],
      borderColor: [
        'rgb(255, 255, 255)'
      ],
      borderWidth: 5
    }]
  });

  return <Bar data={data} />;
};