import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { StorageService } from "./storage.service";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  private readonly helper: JwtHelperService;

  constructor(private storageService: StorageService) {
    this.helper = new JwtHelperService();
  }

  public isAuthenticated(): boolean {
    const token = this.storageService.getItem("jwtToken");
    return !this.helper.isTokenExpired(token);
  }
}