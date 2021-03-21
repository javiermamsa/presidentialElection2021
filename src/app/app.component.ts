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

  onFormSubmited(dni: DNI) {
    this.userData = dni
  }

  isUserAllowed(allowed: boolean) {
    this.allowed = allowed;
  }
}
