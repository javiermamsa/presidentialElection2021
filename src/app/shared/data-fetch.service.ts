import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class DataFetchService {
    constructor(private http: HttpClient) {}

    fetchDni(id: string) {
        return this.http.get('https://elecciones-generales-2021-default-rtdb.firebaseio.com/DNI/' + id + '.json');
    }
}