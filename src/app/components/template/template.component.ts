
import { Component, EventEmitter, Input, OnInit, Output,ChangeDetectorRef, ViewChild, SimpleChanges  } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { ToastrService } from 'ngx-toastr';




@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {




carousel1 = [
  {
    slideTitle: "Slide 1 ngFor",
    slideText: "Lorem ipsum dolor sit amet",
    slideImg: "../../../assets/bote.jpg",
    active: "",
    carouselImg: "carouselImg",
  },
  {
    slideTitle: "Slide 2",
    slideText: "Lorem ipssum dolor sit amet, consectetur adipiscing elit. ",
    slideImg: "../../../assets/china.jpg",
    active: "",
    carouselImg: "carouselImg ",

  },
  {
    slideTitle: "Slide 3",
    slideText: "Lorem ipsum dolor sit amet, eget aliquam nisl nisl sit amet nisl. Sed euismod, nunc ut aliquam tincidunt, nunc nisl aliquam mauris, eget aliquam nisl nisl sit amet nisl.",
    slideImg: "../../../assets/tunel.jpg",
    active: "",
    carouselImg: "carouselImg",

  }
];


  clients = [
    {
      clientName: "Juan Perez",
      address: "Calle 123, Ciudad ABC",
      phone: "555-1234",
      email: "juanperez@gmail.com"
    },
    {
      clientName: "Maria Rodriguez",
      address: "Av. Principal, Ciudad XYZ",
      phone: "555-5678",
      email: "mariarodriguez@hotmail.com"
    },
    {
      clientName: "Pedro Garcia",
      address: "Calle 456, Ciudad DEF",
      phone: "555-2468",
      email: "pedrogarcia@yahoo.com"
    },
    {
      clientName: "Ana Lopez",
      address: "Carrera 789, Ciudad GHI",
      phone: "555-1357",
      email: "analopez@outlook.com"
    },
    {
      clientName: "Jose Ramirez",
      address: "Calle 789, Ciudad JKL",
      phone: "555-3690",
      email: "joseramirez@gmail.com"
    }
  ];

  brokers = [
    {
      ID: "30",
      CNPJ: "64.725.230/0001-09",
      user: "wrumbos",
      company: "Manuela Pereira",
      email: "mapereira@corretores.com",

    },
    {
      ID: "33",
      CNPJ: "16.102.010/0001-20 ",
      user: "GusToriny",
      company: "Gustavo Toriny",
      email: "gustoriny@corretores.com",

    },
    {
      ID: "34",
      CNPJ: "16.102.010/0001-20 ",
      user: "GaFernandez",
      company: "Gabriela Fernandez",
      email: "gfernandez@corretores.com",

    },
    {
      ID: "35",
      CNPJ: "16.102.010/0001-20 ",
      user: "AFerreira",
      company: "Ana Ferreira",
      email: "pferreira@corretores.com",

    },
    {
      ID: "36",
      CNPJ: "16.102.010/0001-20 ",
      user: "ZuFerreira",
      company: "Zulma Ferreira",
      email: "zferreira@corretores.com",
      creationDate: "10-10-2021",
      conectionDate: "18-10-2022 15:11:00",
    },
    {
      ID: "37",
      CNPJ: "16.102.010/0001-20 ",
      user: "BFerreira",
      company: "Blanca Ferreira",
      email: "bferreira@corretores.com",

    },
    {
      ID: "38",
      CNPJ: "16.102.010/0001-20 ",
      user: "SCosta",
      company: "Sabrina Costa",
      email: "scosta@corretores.com",
      creationDate: "10-10-2021",
      conectionDate: "18-10-2022 17:11:00",
    },
    {
      ID: "39",
      CNPJ: "16.102.010/0001-20 ",
      user: "FMiranda",
      company: "Flor Miranda",
      email: "fmiranda@corretores.com",

    },
  ]

  datosCards = [
    {
      imgCard: "../../../assets/bote.jpg",
      titleCard: "Categoría 1",
      textCard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt ",
      item1: "Item 1",
      item2: "Item 2",
      item3: "Item 3",
      url1: "https://www.google.com/",
      url2: "#",
      linkText1: "Link 1",
      linkText2: "Link 2",
    },
    {
      imgCard: "../../../assets/china.jpg",
      titleCard: "Categoría 2",
      textCard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt ",
      item1: "Item 1",
      item2: "Item 2",
      item3: "Item 3",
      url1: "https://www.google.com/",
      url2: "#",
      linkText1: "Link 1",
      linkText2: "Link 2",
    },

    {
      imgCard: "../../../assets/china.jpg",
      titleCard: "Categoría 3",
      textCard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt ",
      item1: "Item 1",
      item2: "Item 2",
      item3: "Item 3",
      url1: "https://www.google.com/",
      url2: "#",
      linkText1: "Link 1",
      linkText2: "Link 2",
    },

    {
      imgCard: "../../../assets/china.jpg",
      titleCard: "Categoría 4",
      textCard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt ",
      item1: "Item 1",
      item2: "Item 2",
      item3: "Item 3",
      url1: "https://www.google.com/",
      url2: "#",
      linkText1: "Link 1",
      linkText2: "Link 2",
    },
    {
      imgCard: "../../../assets/china.jpg",
      titleCard: "Categoría 5",
      textCard: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut aliquam tincidunt ",
      item1: "Item 1",
      item2: "Item 2",
      item3: "Item 3",
      url1: "https://www.google.com/",
      url2: "#",
      linkText1: "Link 1",
      linkText2: "Link 2",
    }



  ]


  buttonWasClicked = false;
  buttonWasClicked2 = false;
  buttonWasClicked3 = false;
  buttonWasClicked4 = false;
  buttonWasClicked5 = false;
  buttonWasClicked6 = false;
  buttonWasClicked7 = false;

  textoPrueba ="";



  constructor(
    private renderer: Renderer2,
    private changeDetectorRef: ChangeDetectorRef,
    private toastr: ToastrService) {


     }

  ngOnInit(): void {


  }




  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
  show() {
    this.toastr.show('Este es un mensaje', 'Recuerde tal cosa',{
      closeButton: true,
      timeOut:0
    } );
  }

  showToast() {
    this.toastr.success('¡Hola mundo!');
  }


handleButtonClick() {
    this.buttonWasClicked = !this.buttonWasClicked;
    this.buttonWasClicked3 =false
    this.buttonWasClicked4 =false
    this.buttonWasClicked5 =false
  }

  handleButtonClick2() {
    this.buttonWasClicked2 = !this.buttonWasClicked2 ;
    this.buttonWasClicked3 =false
    this.buttonWasClicked4 =false
    this.buttonWasClicked5 =false
    this.buttonWasClicked6 =false
    this.buttonWasClicked7 =false

  }
  handleButtonClick3() {
    this.buttonWasClicked3 = !this.buttonWasClicked3 ;

    this.buttonWasClicked =false
    this.buttonWasClicked2 =false
    this.buttonWasClicked4 =false
    this.buttonWasClicked5 =false
    this.buttonWasClicked6 =false
    this.buttonWasClicked7 =false
  }
  handleButtonClick4() {
    this.buttonWasClicked4 = !this.buttonWasClicked4 ;
    this.buttonWasClicked =false
    this.buttonWasClicked2 =false
    this.buttonWasClicked3 =false
    this.buttonWasClicked5 =false
    this.buttonWasClicked6 =false
    this.buttonWasClicked7 =false
  }

  handleButtonClick5() {
    this.buttonWasClicked5 = !this.buttonWasClicked5 ;
    this.buttonWasClicked =false
    this.buttonWasClicked2 =false
    this.buttonWasClicked3 =false
    this.buttonWasClicked4 =false
    this.buttonWasClicked6 =false
    this.buttonWasClicked7 =false


  }

  handleButtonClick6() {
    this.buttonWasClicked6 = !this.buttonWasClicked6 ;
    this.buttonWasClicked =false
    this.buttonWasClicked2 =false
    this.buttonWasClicked3 =false
    this.buttonWasClicked4 =false
    this.buttonWasClicked5 =false
    this.buttonWasClicked7 =false
  }
  handleButtonClick7() {
    this.buttonWasClicked7 = !this.buttonWasClicked7 ;
    this.buttonWasClicked =false
    this.buttonWasClicked2 =false
    this.buttonWasClicked3 =false
    this.buttonWasClicked4 =false
    this.buttonWasClicked5 =false
    this.buttonWasClicked6 =false
  }
}
