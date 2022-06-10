import { IJugadorFutbol } from './../../models/jugadorFutbol.interface';
import { Component, OnInit } from '@angular/core';
import {IDeportistas} from '../../models/deportistas.interface';
@Component({
  selector: 'app-clase1-deportistas',
  templateUrl: './clase1-deportistas.component.html',
  styleUrls: ['./clase1-deportistas.component.scss']
})
export class Clase1DeportistasComponent implements OnInit {
  deportistas: IJugadorFutbol[] =[
    
  {  nombre: 'Juan',
    apellido: 'Perez',
    edad: 20,
    deporte: 'Futbol',
    posicion: 'Delantero',
    dorsal: "01"
  },
  {  nombre: 'Pedro',
    apellido: 'Garcia',
    edad: 23,
    deporte: 'Futbol',
    posicion: 'Portero',
    dorsal: "02"
  },
  {
      nombre: 'Antonio',
      apellido: 'Robles',
      edad: 25,
      deporte: 'Futbol',
      posicion: 'Defensa central',
      dorsal: "03"
  },
  {
      nombre: 'Juan',
      apellido: 'Zanchez',
      edad: 30,
      deporte: 'Futbol',
      posicion: 'Medio campo',
      dorsal: "04"
  },
  {
    nombre: 'Maria',
    apellido: 'Perez',
    edad: 25,
    deporte: 'Futbol',
    posicion: 'Centro campo',
    dorsal: "05"
  },
  {
    nombre: 'Jose',
    apellido: 'Gomez',
    edad: 30,
    deporte: 'Futbol',
    posicion: 'Lateral derecho',
    dorsal: "06"
  },
  {
    nombre: 'Pablo',
    apellido: 'gomez',
    edad: 30,
    deporte: 'Futbol',
    posicion: 'Lateral izquierdo',  
    dorsal: "07"
  },
  {
    nombre: 'Raul',
    apellido: 'Sanchez',
    edad: 30,
    deporte: 'Futbol',
    posicion: 'Delantero',
    dorsal: "08"
  },
  {
    nombre: 'Fernando',
    apellido: 'Gonzalez',
    edad: 30,
    deporte: 'Futbol',
    posicion: 'Delantero',
    dorsal: "09"
  },
  {
    nombre: 'Gonzalo',
    apellido: 'Sanchez',
    edad: 30,
    deporte: 'Futbol',
    posicion: 'Delantero',
    dorsal: "10"
  },
  {
    nombre: 'Sergio',
    apellido: 'Blanco',
    edad: 30,
    deporte: 'Futbol',
    posicion: 'Delantero',
    dorsal: "11"
  },
  {
    nombre: 'Tomas',
    apellido: 'Gonzalez',
    edad: 30,
    deporte: 'Futbol',
    posicion: 'Entrenador',
    dorsal: ""
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }
  
  saludar(){
    alert('Hola Mundo');
    console.log(this.deportistas);
  }



  ;
}
