import { Component } from '@angular/core';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-padre-hijo',
  templateUrl: './padre-hijo.component.html',
  styleUrls: ['./padre-hijo.component.css']
})
export class PadreHijoComponent {

  libros:Libro[]=[
    {
      "nombre":"Cien años de soledad",
      "author":"Gabriel Garcia Marquez",
      "price":20
    },
    {
      "nombre":"El amor en tiempos del colera",
      "author":"Gabriel Garcia Marquez",
      "price":100
    },
    {
      "nombre":"El abogado mas hermoso del mundo",
      "author":"Gabriel Garcia Marquez",
      "price":110
    },
    {
      "nombre":"La hojarasca",
      "author":"Gabriel Garcia Marquez",
      "price":130
    },
  ];

  newLibro(libro:Libro):void{
    this.libros.unshift(libro);
  }
}
