import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "src/app/core/core/security/login.service";
import { Router } from "@angular/router";
import { StorageService } from "src/app/core/core/security/storage.service";
import { AlertService } from '../services/alert.service';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private storage: StorageService,
    private alertService: AlertService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.required],
      googleCode: ["", Validators.required]
    });
  }

  login() {
    this.loginService
      .loginFirstFactor(
        this.loginForm.value.login,
        this.loginForm.value.password,
        this.loginForm.value.googleCode
      )
      .subscribe(
        res => {
          this.storage.setItem("jwtToken", res.jwtToken);
          this.router.navigate(["/dashboard"]);
          this.alertService.success(`Successfully logged in`);
        },
        err => {
          this.alertService.error(`Bad credentials`);
        }
      );
  }
}