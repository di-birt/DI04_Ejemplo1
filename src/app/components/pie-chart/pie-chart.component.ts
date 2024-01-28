import { Component, OnInit } from '@angular/core';
// Necesitamos importar Chart desde chart.js
import { Chart, ChartType } from 'chart.js/auto';
 
@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnInit {
 
  // Atributo que almacena los datos del chart
  public chart!: Chart;

  ngOnInit(): void {
      this.inicializarChart();
  }

  private inicializarChart(){
    const data = {
      labels: ['Red','Green','Yellow','Grey','Blue'],
      datasets: [{
        label: 'My First Dataset',
        data: [11, 16, 7, 3, 14],
        backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(75, 192, 192)',
          'rgb(255, 205, 86)',
          'rgb(201, 203, 207)',
          'rgb(54, 162, 235)'
        ]
      }]
    };
 
     // Creamos la gráfica
    this.chart = new Chart("pieChart", {
      type: 'pie' as ChartType, // tipo de la gráfica 
      data: data, // datos 
      options: { // opciones de la gráfica
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            labels: {
              font: {
                size: 16,
                weight: 'bold'
              }
            },
          }
        },
      }
    });
  }
}