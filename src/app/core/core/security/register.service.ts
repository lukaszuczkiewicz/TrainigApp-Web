import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from "rxjs";

import { environment } from "src/environments/environment";
import { UserToRegister } from "src/app/shared/models/UserToRegister";
import { AlertService } from 'src/app/shared/services/alert.service';

@Injectable({
  providedIn: "root"
})

export class RegisterService {
  private readonly URL: string = environment.URL;
  private readonly getPreSharedKeyEndpoint: string =
    environment.getPreSharedKey;
  private readonly registerEndpoint: string = environment.register;

  constructor(
    private http: HttpClient,
    private router: Router,
    private alertService: AlertService) {}

  getPreSharedKey(): Observable<IPreSharedKeyModel> {
    const url = this.URL + this.getPreSharedKeyEndpoint;
    return this.http.get<IPreSharedKeyModel>(url);
  }

  register(userToRegister: UserToRegister): void {
    const url = this.URL + this.registerEndpoint;
    this.http.post(url, userToRegister).subscribe(()=> {
      this.alertService.success(`Registered successfully. You can now sign in.`);
    }, error => {
      this.alertService.error(error);
    }, () => {
      this.router.navigate(["login"]);
    });
  }
}

interface IPreSharedKeyModel {
  key: string;
}
