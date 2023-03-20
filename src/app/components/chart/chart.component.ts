 /**
    * @description: Componente para mostrar gráficos de tipo bar, line, pie, doughnut, radar, polarArea
    * @version: 1.0.0
    */

import { Component, Input, OnInit, ViewChild  } from '@angular/core';
import { Chart, ChartConfiguration, ChartDataset, TooltipItem, LegendItem } from 'chart.js';



@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() chartClass:string = '';
  @Input() chartType:any = '';
  @Input() chartId = '';
  @Input() labelDisplay = true;

  @Input() dataLabel1:string = '';
  @Input() dataLabel2:string = '';
  @Input() dataLabel3:string = '';

  @Input() data1Bg:string = '';
  @Input() data2Bg:string = '';
  @Input() data3Bg:string = '';

  @Input() data1border:string = '';
  @Input() data2border:string = '';
  @Input() data3border:string = '';


  @Input() data1fill:boolean = false;
  @Input() data2fill:boolean = false;
  @Input() data3fill:boolean = false;

  @Input() data1Hidden:boolean = true;
  @Input() data2Hidden:boolean = true;
  @Input() data3Hidden:boolean = true;

  @Input() dataLabels: any[] = [];
  @Input() dataValues1: any[] = [];
  @Input() dataValues2: any[] = [];
  @Input() dataValues3: any[] = [];


  canvas: any;
  ctx: any;


@ViewChild('mychart') mychart: any;

  constructor() {}
  ngOnInit(): void {}



  ngAfterViewInit() {
    this.canvas = this.mychart.nativeElement;
    this.ctx = this.canvas.getContext('2d');
    new Chart(this.ctx, {
        type: this.chartType,
        data: {
            datasets: [{
                label: this.dataLabel1,
                data: this.dataValues1,
                backgroundColor: this.data1Bg,
                borderColor: this.data1border,
                fill: this.data1fill,
                hidden: this.data1Hidden
            },
            {
                label: this.dataLabel2,
                data: this.dataValues2,
                backgroundColor: this.data2Bg,
                borderColor: this.data2border,
                fill: this.data2fill,
                hidden: this.data2Hidden
            },
            {
              label: this.dataLabel3,
              data: this.dataValues3,
              backgroundColor: this.data3Bg,
              borderColor: this.data3border,
              fill: this.data3fill,
              hidden: this.data3Hidden
          }

          ],
            labels: this.dataLabels
        },
        options: {
          plugins: {
            legend: {
              display: this.labelDisplay,
              labels: {
                boxWidth:20,

              },

              }
            }
          }






    });
}

}


