import { Component } from '@angular/core';
import { Depto } from './Depto';

@Component({
  selector: 'app-depto-list',
  standalone: false,
  templateUrl: './depto-list.html',
  styleUrl: './depto-list.scss',
})
export class DeptoList {
  deptos: Depto [] = [
  {
    imagen: "depto1.jpg",
    direccion: "Rodriguez 752",
    estado:"Alquiler",
    precio: 750000,
    dimension: "50m2"
  },
  {
    imagen: "depto1.jpg",
    direccion: "Uriburu 740",
    estado:"Venta",
    precio: 75000,
    dimension: "70m2"
  },
  {
    imagen: "depto1.jpg",
    direccion: "Alem 312",
    estado:"Alquiler",
    precio: 500000,
    dimension: "40m2"
  }
  ]
}
