import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataFetchService } from '../shared/data-fetch.service';
import { DniService } from '../shared/dni.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() formSubmited = new EventEmitter<any>();
  @Output() userAllowed = new EventEmitter<boolean>();
  @Output() dniNumber = new EventEmitter<string>();
  allowed = true;

  constructor(private dataFetchService: DataFetchService,
              private dniService: DniService) {}

  onSubmit(form: NgForm) {
    const dniNumber = form.value.dni;
    this.dniService.setDni(dniNumber);
    this.dataFetchService.fetchDni(this.dniService.getDni()).subscribe(response => {
      if(response) {
        this.allowed = true;
        this.formSubmited.emit(response);
        this.userAllowed.emit(this.allowed);
      } else {
        this.allowed = false;
        this.userAllowed.emit(this.allowed);
        this.dniNumber.emit(dniNumber);
      }
    });
    form.reset();
  }
}
