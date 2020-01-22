import { Component, OnInit } from "@angular/core";
import { RegisterService } from "src/app/core/core/security/register.service";
import { MatSnackBar } from "@angular/material";
import { UserToRegister } from "../models/UserToRegister";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  protected preSharedKey: string;
  protected registerForm: FormGroup;
  protected QRCode: string;

  constructor(
    private registerService: RegisterService,
    private matSnackBar: MatSnackBar,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.assignPreSharedKey();
    this.buildRegisterForm();
  }

  onRegister(): void {
    this.register();
  }

  private buildRegisterForm() {
    this.registerForm = this.fb.group({
      login: ["", Validators.required],
      password: ["", Validators.required],
      email: ["", [Validators.required, Validators.email]],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    });
  }

  private assignPreSharedKey(): void {
    this.registerService.getPreSharedKey().subscribe(
      res => {
        this.preSharedKey = res.key;
        this.QRCode = `otpauth://totp/Andrzej?secret=${res.key}&issuer=SocialApp`;
      },
      err => {
        this.matSnackBar.open("Can't get Pre Shared Key", "OK", {
          duration: 3000
        });
      }
    );
  }

  protected register(): void {
    if (this.registerForm.invalid || !this.preSharedKey) {
      this.matSnackBar.open("Invalid form or can't get Can't get Pre Shared Key", "OK", {
        duration: 3000
      });
      return;
    }

    const user: UserToRegister = {
      ...this.registerForm.value,
      PreSharedKey: this.preSharedKey
    }
    this.registerService.register(user);
  }
}
