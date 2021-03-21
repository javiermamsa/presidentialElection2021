import { Component } from '@angular/core';
import { DniService } from '../shared/dni.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent {
  dni: string = ''

  constructor(private dniService: DniService) {
    this.dni = this.dniService.getDni();
  }

}
