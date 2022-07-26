import { Injectable } from '@angular/core';

const KEY = 'GHSWebToken';

@Injectable({
  providedIn: 'root',
})
export class TokenService {
  hasToken() {
    return !!this.getToken();
  }

  getToken() {
    return window.localStorage.getItem(KEY) ?? '';
  }

  setToken(token: string) {
    window.localStorage.setItem(KEY, token);
  }

  removeToken() {
    window.localStorage.removeItem(KEY);
  }
}
