import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-grafica-dona',
  templateUrl: './grafica-dona.component.html',
  styles: []
})
export class GraficaDonaComponent implements OnInit {
 @Input() public doughnutChartLabels:string[] = [];
 @Input() public doughnutChartData:number[] = [];
 @Input() public doughnutChartType:string = '';

  constructor() { }

  ngOnInit() {
  }

}
