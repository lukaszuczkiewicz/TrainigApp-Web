import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { ConditionalExpr } from '@angular/compiler';
import { Router } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: "root"
})
export class LoginService {
  private URL = environment.URL;
  private loginEndpoint = environment.login

  constructor(private http: HttpClient) { }

  loginFirstFactor(login: string, password: string, googleCode: string): Observable<any> {
    let url = `${this.URL}${this.loginEndpoint}`;
    let body = {
      login: login,
      password: password,
      code: googleCode
    };

    return this.http.post(url, body);
  }

  // setColors(primaryColor: string, accentColor: string) {
  //     this.storage.setItem("PrimaryColor", primaryColor);
  //     this.storage.setItem("AccentColor", accentColor);
  // }
}
