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

//Only works with static data for now
export const BrainChart: React.FC<{}> = () => {
  const labels = ['Delta', 'Theta', 'Alpha', 'Sigma', 'Beta'];
  const [data, setData] = useState({
    labels: labels,
    datasets: [{
      label: 'Brainwaves',
      data: [40, 50, 60, 70, 80],
      backgroundColor: [
        'rgb(255, 255, 255)'
      ],
      borderColor: [
        'rgb(0, 0, 0)'
      ],
      borderWidth: 1
    }]
  });

  return <Bar data={data} />;
};