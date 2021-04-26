import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { DNI } from "./dni.model";

@Injectable({providedIn: 'root'})
export class DataFetchService {
    constructor(private http: HttpClient) {}

    fetchDni(id: string) {
        return this.http.get<DNI>('URI' + id + '.json');
    }
}
