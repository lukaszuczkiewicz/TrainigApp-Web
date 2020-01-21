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
      preSharedKey: [this.preSharedKey],
      firstName: ["", Validators.required],
      lastName: ["", Validators.required]
    });
  }

  private assignPreSharedKey(): void {
    this.registerService.getPreSharedKey().subscribe(
      res => {
        this.preSharedKey = res.key;
        this.QRCode = `otpauth://totp/Andrzej?secret=${res.key}&issuer=SocialApp`;
        console.log(res)
      },
      err => {
        this.matSnackBar.open("Can't get Pre Shared Key", "OK", {
          duration: 3000
        });
      }
    );
  }

  protected register(): void {
    this.registerService.register(this.registerForm.value)
  }
}
