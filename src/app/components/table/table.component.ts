import { Component, Input, OnInit } from '@angular/core';
import { Broker } from 'src/app/interface/broker';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @Input() nameCol1:string = '';
  @Input() nameCol2:string = '';
  @Input() nameCol3:string = '';
  @Input() nameCol4:string = '';
  @Input() nameCol5:string = '';
  @Input() nameCol6:string = '';
  @Input() nameCol7:string = '';
  @Input() sarasa:string = '';

  @Input() datosTabla: any[] = [];

  @Input() var1:string = '';
  @Input() var2:string = '';
  @Input() var3:string = '';
  @Input() var4:string = '';
  @Input() var5:string = '';
  @Input() var6:string = '';
  @Input() var7:string = '';
  @Input() tableClass:string = '';


  constructor() {

  }

  ngOnInit(): void {


  }

  renombraPropiedades(objeto: any, var1: string, var2: string, var3: string, var4: string, var5: string, var6: string, var7: string): any {
    return {
      propiedad1: objeto[var1],
      propiedad2: objeto[var2],
      propiedad3: objeto[var3],
      propiedad4: objeto[var4],
      propiedad5: objeto[var5],
      propiedad6: objeto[var6],
      propiedad7: objeto[var7]
    };
  }

}
