import { Component, Input, OnInit, ViewChild  } from '@angular/core';
import { Chart } from 'chart.js';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() chartClass:string = '';
  @Input() chartType:string = '';
  @Input() chartData:string = '';
  @Input() chartLabels:string = '';
  @Input() chartOptions:string = '';
  @Input() chartColors:string = '';
  @Input() chartLegend:string = '';
  @Input() chartPlugins:string = '';
  canvas: any;
  ctx: any;
  @ViewChild('mychart') mychart: any;



  constructor() {

   }

  ngOnInit(): void {
  }


  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');

    new Chart(this.ctx, {
        type: 'line',
        data: {
            datasets: [{
                label: 'Current Vallue',
                data: [0, 20, 40, 50],
                backgroundColor: "rgb(115 185 243 / 65%)",
                borderColor: "#007ee7",
                fill: true,
            },
            {
                label: 'Invested Amount',
                data: [0, 20, 40, 60, 80],
                backgroundColor: "#47a0e8",
                borderColor: "#007ee7",
                fill: true,
            }],
            labels: [this.chartLabels]
        },
    });
}

}


