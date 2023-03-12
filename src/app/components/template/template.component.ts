import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  buttonWasClicked = false;
  buttonWasClicked2 = false;
  buttonWasClicked3 = false;


  constructor() { }

  ngOnInit(): void {
  }
handleButtonClick() {
    this.buttonWasClicked = !this.buttonWasClicked;
  }

  handleButtonClick2() {
    this.buttonWasClicked2 = !this.buttonWasClicked2;

  }
  handleButtonClick3() {
    this.buttonWasClicked3 = !this.buttonWasClicked3 ;


  }


}
