import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { Observable } from "rxjs";
import { UserToRegister } from "src/app/shared/models/UserToRegister";
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

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
    private matSnackBar: MatSnackBar,
    private router: Router) {}

  getPreSharedKey(): Observable<IPreSharedKeyModel> {
    const url = this.URL + this.getPreSharedKeyEndpoint;
    return this.http.get<IPreSharedKeyModel>(url);
  }

  register(userToRegister: UserToRegister): void {
    const url = this.URL + this.registerEndpoint;
    this.http.post(url, userToRegister).subscribe(()=> {
      this.matSnackBar.open(`Registered successfully. You can now sign in.`, "Ok", { duration: 3000 });
    }, error => {
      this.matSnackBar.open(error, "Ok", { duration: 3000 });
    }, () => {
      this.router.navigate(["login"]);
    });
  }
}

interface IPreSharedKeyModel {
  key: string;
}
