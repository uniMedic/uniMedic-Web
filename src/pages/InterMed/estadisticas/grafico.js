import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import './grafico.css';
const data = {
  labels: ['Insatisfechos','Satisfechos'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 45],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)'
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)'
      ],
      borderWidth: 1,
    },
  ],
};

const DoughnutChart = () => (
  <>
    <div className='header'>
      <h2></h2>
    </div>
    <section className="body">
        <Doughnut  data={data} />
    </section>
    
  </>
);

export default DoughnutChart;