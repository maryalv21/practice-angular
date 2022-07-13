import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //nombre de la etiqueta html que corresponde a este componente
  templateUrl: './app.component.html', //código html asociado a este componente
  styleUrls: ['./app.component.css'] //los estilos asociados a este componente
})
export class AppComponent {
  title = 'angular-demo';
}
