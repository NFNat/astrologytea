import { Component, OnInit,  EventEmitter, Output, Input } from '@angular/core';


@Component({
  selector: 'app-carrousel',
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent implements OnInit {

  @Input() id:string = '';
  @Input() texto:string = '';
  @Input() carouselClass:string = '';
  @Input() carouselClass1:string = '';


  constructor() { }

  ngOnInit(): void {
  }

}
