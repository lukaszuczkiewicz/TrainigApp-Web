import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IRunner } from "../models/IRunner";
import { RunnerToCreate } from '../models/RunnerToCreate';

@Injectable({
  providedIn: "root"
})
export class RunnersService {
  private readonly URL = environment.URL;
  private readonly runnersEndpoint = environment.runnersEndpoint;
  private readonly addRunnerEndpoint = environment.addRunner;
  private readonly editRunnerEndpoint = environment.editRunner;
  private readonly deleteRunnerEndpoint = environment.deleteRunner;

  constructor(private http: HttpClient) {}

  public createRunner(runner: RunnerToCreate): Observable<any>  {
    const url: string = this.URL + this.addRunnerEndpoint;
    return this.http.post(url, runner);
  }

  public deleteRunner(runnerId: string): Observable<any>  {
    const url: string = this.URL + this.deleteRunnerEndpoint;
    return this.http.post(url, runnerId);
  }

  public editRunner(runner: IRunner) {
    const url: string = this.URL + this.editRunnerEndpoint;
    return this.http.put(url, runner);
  }

  public getRunners(): Observable<IRunner[]> {
    const url: string = this.URL + this.runnersEndpoint;
    return this.http.get<IRunner[]>(url);
  }
}