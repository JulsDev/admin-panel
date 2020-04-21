import React from 'react';
import {Line} from 'react-chartjs-2';

export default function ProfitChartsCard({data}) {
  const chartData = {
    labels: ['2015','2016','2017','2018','2019'],
    datasets: [
      {
        label: '',
        fill: false,
        borderColor: '#0097a7',
        data: data.profit,
        backgroundColor: 'transparent'
      }
    ]
  }

    return (
      <div className="row">
        <div className="col s12 m10">
          <div className="card" style={{padding: '50px'}}>
            <div className="card-content black-text">
              <span className="card-title" style={{marginBottom: '5px', fontSize: '24px', fontWeight: 600}}>
                Выручка компании
              </span>
              <Line 
                data={chartData}
                options={{}}
              />
            </div>
          </div>
        </div>
      </div>
    )
}
