import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-nombre',
  templateUrl: './list-nombre.component.html',
  styleUrls: ['./list-nombre.component.css']
})
export class ListNombreComponent {

  @Input()  libros:any[]=[];
}
