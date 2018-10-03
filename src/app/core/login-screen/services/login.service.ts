import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment.prod';
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class LoginService {
    api: string;

    constructor(
        public http: HttpClient
    ) {
      this.api = environment.kazanApi
     }

    public authenticate(bodyLogin: any): Observable<any> {
        return this.http.post(`${this.api}/kazan/api/authenticate/login`, bodyLogin);
    }
}
