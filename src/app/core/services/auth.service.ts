import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';
import { StoreProvider } from './storeProvider/store.provider';

interface IUserInfo {
  email: string;
  password: string;
}
interface ISendTicketDto {
  email: string;
  routingUrl;
  clientId;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseURL = environment.kazanApi;
  accessToken = '';
  tokenType = 'Bearer';
  public jwtHelper = new JwtHelperService();

  constructor(private http: HttpClient, private store: StoreProvider) {
    this.accessToken = this.store.get('accessToken');
    this.tokenType = this.store.get('tokenType') || 'Bearer';
  }

  isAuthenticated() {
    return this.accessToken && !this.jwtHelper.isTokenExpired(this.accessToken);
  }

  logout() {
    // clean up data
    this.accessToken = '';
    this.store.remove('accessToken');
    this.store.remove('tokenType');
  }

  authenticate(userInfo: IUserInfo): Observable<any> {
    return this.http.post(`${this.baseURL}/account/login-account`, userInfo);
  }

  sendReactivateAccountTicket(sendTicketDto: ISendTicketDto): Observable<any> {
    // TODO: apply with latest API from backend
    return this.http.post(`${this.baseURL}/account/account-deactivated`, sendTicketDto);
  }
}
