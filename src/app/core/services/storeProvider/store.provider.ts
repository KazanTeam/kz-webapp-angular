import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { LocalStorageProvider } from './localStorage.provider';
import { CookieProvider } from './cookie.provider';

export const STORE_NAME = {
  LOCAL_STORAGE: 'LocalStorage',
  COOKIE: 'Cookie'
};

@Injectable({
  providedIn: 'root'
})
export class StoreProvider {
  private store: any;

  constructor() {
    if (environment.storeName === STORE_NAME.LOCAL_STORAGE) {
      this.store = new LocalStorageProvider();
    } else {
      this.store = new CookieProvider();
    }
  }

  public get(key: string): any {
    return this.store.get(key);
  }

  public set(key: string, model: any): void {
    this.store.set(key, model);
  }

  public remove(key: string): void {
    this.store.remove(key);
  }

  public clearAll(): void {
    this.store.clearAll();
  }
}
