import { Component, OnInit, EventEmitter, Output, Input} from '@angular/core';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {

  @Input() canvasTitle:string = '';
  @Input() canvasContent:string = '';
  @Input() canvasButton1:string = '';
  @Input() id:string = '';
  @Input() canvasClass:string = '';

  @Output() onClose = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
  }
  closeCanvas() {
    this.onClose.emit();
  }


}
