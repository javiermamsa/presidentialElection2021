import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() element!:{
    dni: string,
    mesa: string,
    apellidoPaterno: string,
    apellidoMaterno: string,
    nombres: string,
    sexo: string,
    edad: string
  };

  constructor() { }

}
