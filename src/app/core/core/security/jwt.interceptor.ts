import {
  HttpInterceptor,
  HttpHandler,
  HttpEvent,
  HttpRequest
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { StorageService } from "./storage.service";

@Injectable()
export class AddTokenInterceptor implements HttpInterceptor {
  constructor(private storageService: StorageService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const jwtToken = this.storageService.getItem("jwtToken");

    let jsonReq: HttpRequest<any> = req.clone({
      setHeaders: { Authorization: `Bearer ${jwtToken}` }
    });

    return next.handle(jsonReq);
  }
}
