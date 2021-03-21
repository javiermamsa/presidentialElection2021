import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class DniService {
    dni: string = '';
    setDni(dni:string) {
        this.dni = dni
    }

    getDni() {
        return this.dni;
    }
}