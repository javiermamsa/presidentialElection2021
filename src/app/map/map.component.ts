import { Component, Input, OnInit } from '@angular/core';
import { DNI } from '../shared/dni.model';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() element!:DNI;
  mesa:number = 0;
  colour:string = '';

  constructor() { }
  ngOnInit() {
  }

  ngOnChanges() {
    this.mesa = parseInt(this.element.mesa);

    if (this.mesa >= 83036 && this.mesa <= 83095) {
      this.colour = 'amarilla';
    } else if (this.mesa >= 83096 && this.mesa <=83118 ) {
      this.colour = 'roja';
    } else if (this.mesa >= 83119 && this.mesa <=83133) {
      this.colour = 'verde';
    } else if (this.mesa >= 83134 && this.mesa <= 83148) {
      this.colour = 'gris';
    } else {
      this.colour = 'azul';
    }
  }
}
