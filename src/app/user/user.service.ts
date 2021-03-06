import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  api: string;

  constructor(public http: HttpClient) {
    this.api = environment.kazanApi;
  }

  public getUserProfile(id: any): Observable<any> {
    return this.http.get(`${this.api}/kazan/api/v1/user/${id}`);
  }

  public updateUserProfile(body: any): Observable<any> {
      return this.http.put(`${this.api}/kazan/api/v1/user`, body);
  }
}
