import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PadreHijoComponent } from './pages/padre-hijo/padre-hijo.component';
import { ListNombreComponent } from './components/list-nombre/list-nombre.component';
import { FormLibroComponent } from './components/form-libro/form-libro.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PadreHijoComponent,
    ListNombreComponent,
    FormLibroComponent,
 
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
