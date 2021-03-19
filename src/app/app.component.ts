import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData!: {
    'APELLIDO MATERNO': string;
    'APELLIDO PATERNO': string;
    EDAD: string;
    MESA: string;
    NOMBRES: string;
    SEXO: string;
  };
  allowed = true;

  onFormSubmited(dni: {
    'APELLIDO MATERNO': string;
    'APELLIDO PATERNO': string;
    EDAD: string;
    MESA: string;
    NOMBRES: string;
    SEXO: string}) {
    this.userData = dni
  }

  isUserAllowed(allowed: boolean) {
    this.allowed = allowed;
  }
}
