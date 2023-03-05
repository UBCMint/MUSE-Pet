import { Bar } from 'react-chartjs-2'
import { useState } from 'react';
import BrainData from '../../../Models/BrainData'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const StatusChart: React.FC<BrainData> = (props: BrainData) => {
  const petAttibutes = [props.focusLevel, props.tirednessLevel, props.happinessLevel]

  return (
    <Bar 
        data={
          {
            labels: ['Focus Level', 'Tiredness Level', 'Happiness Level'],
            datasets: [{
              label: 'Pet Statuses',
              data: petAttibutes,
              backgroundColor: [
                '#32cec6'
              ],
              borderColor: [
                '#32cec6'
              ],
              borderWidth: 1
            }]
          }
        }
        height={250}
        width={400}
      />
  )
}
