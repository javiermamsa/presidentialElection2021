import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataFetchService } from '../shared/data-fetch.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() formSubmited = new EventEmitter<any>();
  @Output() userAllowed = new EventEmitter<boolean>();
  id: string = '';
  allowed = true;

  constructor(private dataFetchService: DataFetchService) {}

  onSubmit(form: NgForm) {
    this.id = form.value.dni;
    this.dataFetchService.fetchDni(this.id).subscribe(response => {
      if(response) {
        this.allowed = true;
        this.formSubmited.emit(response);
        this.userAllowed.emit(this.allowed);
      } else {
        this.allowed = false;
        this.userAllowed.emit(this.allowed);
      }
    });
    form.reset();
  }
}
