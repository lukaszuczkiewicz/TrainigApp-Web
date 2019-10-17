import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { UserToRegister } from "src/app/shared/models/UserToRegister";

@Injectable({
  providedIn: "root"
})

export class RegisterService {
  private readonly URL: string = environment.URL;
  private readonly getPreSharedKeyEndpoint: string =
    environment.getPreSharedKey;
  private readonly registerEndpoint: string = environment.register;

  constructor(private http: HttpClient) {}

  getPreSharedKey(): Observable<IPreSharedKeyModel> {
    const url = this.URL + this.getPreSharedKeyEndpoint;
    return this.http.get<IPreSharedKeyModel>(url);
  }

  register(userToRegister: UserToRegister): void {
    const url = this.URL + this.registerEndpoint;
    this.http.post(url, userToRegister);
  }
}

interface IPreSharedKeyModel {
  key: string;
}
