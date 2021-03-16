import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData!:{
    dni: string,
    mesa: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    nombres: string,
    sexo: string,
    edad: string
  }; 

  onFormSubmited(dni: {}) {
    this.userData = {
      dni: "44042844",
      mesa: "083106",
      apellidoPaterno: "MAMANI",
      apellidoMaterno: "SALINAS",
      nombres: "JAVIER HENRIQUE",
      sexo: "M",
      edad: "34"
    };
  }
}
