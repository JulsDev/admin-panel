import React from 'react';
import {Bar} from 'react-chartjs-2';

export default function RevenueChartsCard({data}) {
  const chartData = {
    labels: ['2015','2016','2017','2018','2019'],
    datasets: [
      {
        label: '',
        data: data.revenue,
        backgroundColor: [
          '#006064',
          '#00838f',
          '#0097a7',
          '#00acc1',
          '#00bcd4'
        ]
      }
    ]
  }

    return (
      <div className="row">
        <div className="col s12 m10">
          <div className="card" style={{padding: '40px'}}>
            <div className="card-content black-text">
              <span className="card-title" style={{marginBottom: '15px', fontSize: '24px', fontWeight: 600}}>
                Прибыль компании
              </span>
              <Bar 
                data={chartData}
                options={{}}
              />
            </div>
          </div>
        </div>
      </div>
    )
}
