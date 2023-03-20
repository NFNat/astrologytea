import { Component, OnInit,  EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {


@Input() id:string = '';
@Input() modalTitle:string = '';
@Input() modalContent:string = '';
@Input() modalButton1:string = '';
@Input() modalButton2:string = '';
@Input() modalClass:string = '';
@Input() modalDClass:string = '';
@Input() modalBack:string = 'static';

@Output() onClose = new EventEmitter<void>();

buttonWasClicked = false;
  constructor() { }



  ngOnInit(): void {

  }

  ngOnDestroy(){
    this.buttonWasClicked =false;
  }

  closeModal() {
    this.onClose.emit();
    this.buttonWasClicked = false;
  }

handleButtonClick() {
  this.buttonWasClicked = !this.buttonWasClicked;
}

}
