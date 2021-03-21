import { Component, Input } from '@angular/core';
import { DNI } from '../shared/dni.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent {
  @Input() element!:DNI;

  constructor() { }

}
