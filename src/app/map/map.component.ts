import { Component, Input, OnInit } from '@angular/core';
import { DNI } from '../shared/dni.model';
import { DniService } from '../shared/dni.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  @Input() element!:DNI;
  mesa:number = 0;
  colour:string = '';
  dni: string = '';
  shortName: string = '';

  constructor(private dniService: DniService) { }
  ngOnInit() {
  }

  ngOnChanges() {
    this.mesa = parseInt(this.element.mesa);
    this.dni = this.dniService.getDni();

    this.shortName = this.element.nombres
    const counter: number = this.shortName.indexOf(' ');
    this.shortName = this.shortName.substring(0, counter < 0 ? this.shortName.length : counter);

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
