import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { TokenService } from './../core/token/token.service';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService {
  constructor(private http: HttpClient, private token: TokenService) {}

  public getData = (route: string) => {
    return this.http.get(
      this.createCompleteRoute(route, environment.urlAddress),
      this.generateHeaders()
    );
  };

  public postData = (route: string, body: any) => {
    const sbody = JSON.stringify(body);

    return this.http.post(
      this.createCompleteRoute(route, environment.urlAddress),
      sbody,
      this.generateHeaders()
    );
  };

  public putData = (route: string, body: any) => {
    return this.http.put(
      this.createCompleteRoute(route, environment.urlAddress),
      body,
      this.generateHeaders()
    );
  };

  public deleteData = (route: string) => {
    return this.http.delete(
      this.createCompleteRoute(route, environment.urlAddress),
      this.generateHeaders()
    );
  };

  private createCompleteRoute = (route: string, envAddress: string) => {
    return `${envAddress}/${route}`;
  };

  private generateHeaders = () => {
    if (this.token.hasToken()) {
      return {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' }).set(
          'Authorization',
          `Bearer ${this.token.getToken()}`
        ),
      };
    }
    return {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
    };
  };
}
