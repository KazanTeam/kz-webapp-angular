import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  api: string;

  constructor(public http: HttpClient) {
    this.api = environment.kazanApi;
  }

  public register(body: any): Observable<any> {
    return this.http.post(`${this.api}/kazan/user/add`, body);
  }
}
