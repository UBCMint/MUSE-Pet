import { Bar } from 'react-chartjs-2'

export const StatusChart = () => {
  return (
    <div>
      <Bar 
        data={
          {
            labels: ['Health', 'Hunger', 'Happiness'],
            datasets: [{
              label: 'Pet Statuses',
              data: [12, 12, 12]
            }]
          }
        }
        height={400}
        width={600}
      />
    </div>
  )
}

// export default StatusChart