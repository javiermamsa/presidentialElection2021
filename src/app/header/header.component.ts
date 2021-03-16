import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @Output() formSubmited = new EventEmitter<{dni: string}>();
  id: string = '';

  constructor() { }

  onSubmit(form: NgForm) {
    this.id = form.value.dni
    this.formSubmited.emit({dni: this.id})
    form.reset();
  }

}
