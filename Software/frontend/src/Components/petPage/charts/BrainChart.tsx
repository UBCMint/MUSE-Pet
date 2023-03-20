import { Bar } from "react-chartjs-2";
import BrainData from "../../../Models/BrainData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const BrainChart: React.FC<BrainData> = (props: BrainData) => {
  const petBrainWaves = [props.alpha, props.beta];

  return (
    <div>
      <Bar
        data={{
          labels: ["Alpha Waves", "Beta Waves"],
          datasets: [
            {
              label: "Pet Brain Waves",
              data: petBrainWaves,
              backgroundColor: ["#239dc3", "#c896b5"],
              borderColor: ["#239dc3", "#c896b5"],
              borderWidth: 1,
            },
          ],
        }}
        height={250}
        width={400}
      />
    </div>
  );
};
