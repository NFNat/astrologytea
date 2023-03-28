import { Component, OnInit,  EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  @Input() id:string = '';
  @Input() target:string = '';
  @Input() carouselRide:string = '';
  @Input() carouselClass:string = '';
  @Input() carouselClass1:string = '';
  //@Input() carouselClass2:string = '';
  @Input() intemActive:string = '';

  @Input() slide1Title:string = '';
  @Input() slide2Title:string = '';
  @Input() slide3Title:string = '';

  @Input() slide1Text:string = '';
  @Input() slide2Text:string = '';
  @Input() slide3Text:string = '';

  @Input() slide1Img:string = '';
  @Input() slide2Img:string = '';
  @Input() slide3Img:string = '';

  @Input() datosCarousel: any[] = [];
  @Input() var1:string = '';
  @Input() var2:string = '';
  @Input() var3:string = '';
  @Input() var4:string = '';
  @Input() var5:string = '';
  @Input() var6:string = '';
  @Input() var7:string = '';


  constructor() { }

  ngOnInit(): void {
console.log();



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
