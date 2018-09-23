import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Http } from "@angular/http";


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    api: string;

    constructor(
        public http: Http
    ) { }

    public authenticate(bodyLogin: any): Observable<any> {
        return this.http.post(`${this.api}`, bodyLogin);
    }
}