import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
  @Output() buttonClick = new EventEmitter<void>();
  @Input() buttonText = 'por defecto';
  @Input() buttonClass = '';



  constructor() { }

  ngOnInit(): void {
  }
  buttonClicked() {
    this.buttonClick.emit();
  }
}
