import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Libro } from 'src/app/models/libro';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styleUrls: ['./form-libro.component.css']
})
export class FormLibroComponent {

  @Output() 
  public newLibro:EventEmitter<Libro> =  new EventEmitter();

  miFormulario:FormGroup=this.fb.group({
    nombre:['',[Validators.required]],
    author:['',[Validators.required]],
    price:['',[Validators.required]]
  })
  constructor(
    private fb:FormBuilder
  ){}

  crear(){
    
    this.newLibro.emit(this.miFormulario.value);
    this.miFormulario.reset();
  }
}
