import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GroupService {
  api: string;

  constructor(public http: HttpClient) {
    this.api = environment.kazanApi;
  }

  public getGroup(): Observable<any> {
    return this.http.get(`${this.api}/kazan/api/v1/group/all`);
  }
}
