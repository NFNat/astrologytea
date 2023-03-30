import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() cardClass: string ='';
@Input() cardTitle: string ='';
@Input() cardText: string ='';
@Input() cardImgUrl: string ='';
@Input() item1: string ='';
@Input() item2: string ='';
@Input() item3: string ='';
@Input() url1: string ='';
@Input() url2: string ='';
@Input() cardLink1: string ='';
@Input() cardLink2: string ='';
@Input() listGroup: boolean = false;
@Input() cardImg: boolean = false;
@Input() cardFooter: boolean = false;

//card array

@Input() datosCards: any[] = [];


@Input() var1:string = '';
@Input() var2:string = '';
@Input() var3:string = '';
@Input() var4:string = '';
@Input() var5:string = '';
@Input() var6:string = '';
@Input() var7:string = '';
@Input() var8:string = '';
@Input() var9:string = '';
@Input() var10:string = '';

  constructor() { }

  ngOnInit(): void {
  }


  renombraPropiedades(objeto: any, var1: string, var2: string, var3: string, var4: string, var5: string, var6: string, var7: string, var8: string, var9: string, var10: string): any {
    return {
      propiedad1: objeto[var1],
      propiedad2: objeto[var2],
      propiedad3: objeto[var3],
      propiedad4: objeto[var4],
      propiedad5: objeto[var5],
      propiedad6: objeto[var6],
      propiedad7: objeto[var7],
      propiedad8: objeto[var8],
      propiedad9: objeto[var9],
      propiedad10: objeto[var10],
    };
  }

}
