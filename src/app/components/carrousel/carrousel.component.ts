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
  @Input() carouselClass2:string = '';
  @Input() slide1Title:string = '';
  @Input() slide2Title:string = '';
  @Input() slide3Title:string = '';

  @Input() slide1Text:string = '';
  @Input() slide2Text:string = '';
  @Input() slide3Text:string = '';

  @Input() slide1Img:string = '';
  @Input() slide2Img:string = '';
  @Input() slide3Img:string = '';


  constructor() { }

  ngOnInit(): void {
console.log(this.target);


  }

}
