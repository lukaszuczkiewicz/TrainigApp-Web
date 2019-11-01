import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IRunner } from "../models/IRunner";

@Injectable({
  providedIn: "root"
})
export class RunnersService {
  private readonly URL = environment.URL;
  private readonly runnersEndpoint = environment.runnersEndpoint;

  constructor(private http: HttpClient) {}

  public getRunners(): Observable<IRunner[]> {
    const url: string = this.URL + this.runnersEndpoint;
    return this.http.get<IRunner[]>(url);
  }
}