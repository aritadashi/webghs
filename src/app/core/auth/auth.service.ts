// import { TokenService } from './../token/token.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from '../user/user.service';
import { environment } from 'src/environments/environment';
import { map, tap } from 'rxjs/operators';
import { Token } from '../token/token';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private httpClient: HttpClient,
    private userService: UserService
  ) {}
  // constructor(
  //   private httpClient: HttpClient,
  //   private tokenService: TokenService
  // ) {}

  authenticate(usuario: string, senha: string) {
    // const sbody = JSON.stringify({ UserName: usuario, Password: senha });

    return this.httpClient
      .get(
        environment.urlAddress + '/api/login',
        // { username: usuario, password: senha },
        {
          headers: new HttpHeaders({
            'Content-Type': 'application/json; charset=utf-8',
          }).set('Authorization', `Basic ${btoa(usuario + ':' + senha)}`),
          observe: 'body',
        }
      )
      .pipe(
        tap((res) => {
          const authToken = res as Token;

          console.log(authToken);
          this.userService.setToken(authToken.token);
          console.log(
            `usuario ${usuario} autenticado com token ${authToken.token}`
          );
        })
      );
  }
}
