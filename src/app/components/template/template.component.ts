
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Renderer2 } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {



  dataLabels = {
    label1: "label1",
    label2: "label2",
    label3: "label3",
    label4: "label3",
    label5: "label3",
    label6: "label3",
  }

    //create an object dataLabels label1, label2, label3, label4, label5, label6
    //create an object dataValues value1, value2, value3, value4, value5, value6









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


  buttonWasClicked = false;
  buttonWasClicked2 = false;
  buttonWasClicked3 = false;

  textoPrueba ="";



  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

handleButtonClick() {
    this.buttonWasClicked = !this.buttonWasClicked;
  }

  handleButtonClick2() {
    this.buttonWasClicked2 = !this.buttonWasClicked2 ;
  }
  handleButtonClick3() {
    this.buttonWasClicked3 = !this.buttonWasClicked3 ;
  }





}
