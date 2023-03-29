import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() navbarId: string ='';
  @Input() navbar1: string ='';
  @Input() navbar2: string ='';
  @Input() brand: string ='';
  @Input() navbarTarget: string ='';

  @Input() search: boolean =false;
  @Input() colapse: boolean =false;
  @Input() dropDown: boolean =false;

  @Input() link1: string ='';
  @Input() link2: string ='';
  @Input() link3: string ='';
  @Input() link4: string ='';
  @Input() link5: string ='';
  @Input() link6: string ='';
  @Input() link7: string ='';
  @Input() link8: string ='';
  @Input() link9: string ='';
  @Input() link10: string ='';
  @Input() link11: string ='';
  @Input() link12: string ='';

  @Input() texto1: string ='';
  @Input() texto2: string ='';
  @Input() texto3: string ='';
  @Input() texto4: string ='';
  @Input() texto5: string ='';
  @Input() texto6: string ='';
  @Input() texto7: string ='';
  @Input() texto8: string ='';
  @Input() texto9: string ='';
  @Input() texto10: string ='';
  @Input() texto11: string ='';
  @Input() texto12: string ='';


  constructor() { }

  ngOnInit(): void {


  }

}
