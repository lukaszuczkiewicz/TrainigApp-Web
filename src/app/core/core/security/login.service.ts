import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

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
      Login: login,
      Password: password,
      Code: googleCode
    };
    return this.http.post(url, body);
  }
}
