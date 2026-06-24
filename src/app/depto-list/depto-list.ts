import { Component } from '@angular/core';

@Component({
  selector: 'app-depto-list',
  standalone: false,
  templateUrl: './depto-list.html',
  styleUrl: './depto-list.scss',
})
export class DeptoList {
  depto = {
    "imagen": "depto1.jpg",
    "direccion":"Uriburu 740",
    "estado":"Alquiler",
    "precio":"$650.000",
    "dimension":"50m2"
  }
}
