import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http } from "@angular/http";


@Injectable({
    providedIn: 'root'
})
export class RegisterService {
    api: string;

    constructor(
        public http: Http
    ) {
        this.api = '';
    }

    public register(body: any): Observable<any> {
        return this.http.post(`${this.api}`, body);
    }
}