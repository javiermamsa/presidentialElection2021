import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() element!:{
    'APELLIDO MATERNO': string,
    'APELLIDO PATERNO': string,
    EDAD: string
    MESA: string,
    NOMBRES: string,
    SEXO: string,
  };

  constructor() { }

}
