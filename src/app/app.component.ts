import { Component } from '@angular/core';
import { DNI } from './shared/dni.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userData!: DNI;
  allowed = true;
  dniNumber = '';

  onFormSubmited(dni: DNI) {
    this.userData = dni
  }

  isUserAllowed(allowed: boolean) {
    this.allowed = allowed;
  }

  isDniNumber(dniNumber: string) {
    this.dniNumber = dniNumber;
  }
}
