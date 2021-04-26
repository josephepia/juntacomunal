import { Component, OnInit } from '@angular/core';
import {Chart, registerables} from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  chartPQRS!: Chart;

  constructor() { }

  ngOnInit(): void {
    this.crearChartPQRS()
  }


  crearChartPQRS(){
    Chart.register(...registerables);
    this.chartPQRS = new Chart('chartPQRS', {
      type: 'line',
      data: {
          labels: ['Lunes', 'Martes', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
          datasets: [{
            label: 'Recibidos',
            type: 'line',
            data: [65, 59, 80, 81, 56, 55, 40],

           
            tension: 0.4,
            showLine: true,
            borderWidth: 0.1,
            fill: 'start'
          },
          {
            backgroundColor: "rgba(195, 40, 96, 0.1)",
            showLine: true,
            type: 'line',
            label: 'Resueltos',
            data: [50, 70, 45, 89,59, 80, 81],
            tension:0.4,
            borderWidth: 0.1,
            fill: 'start'


            
        }
        ]
      },
      options: {
        plugins: {
          filler: {
            propagate: false,
          }
        },
        interaction: {
          intersect: false,
        },
      responsive: true,
          scales: {
            
              y: {
                  beginAtZero: true
              }
          }
      }
  });
  this.chartPQRS.update()
  }

  actualizarChartPQRS(){

  }

}
