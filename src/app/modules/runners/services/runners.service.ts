import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, Subject } from "rxjs";
import { environment } from "src/environments/environment";
import { IRunner } from "../models/IRunner";
import { RunnerToCreate } from '../models/RunnerToCreate';
import { RunnerToUpdate } from '../models/RunnerToUpdate';

@Injectable({
  providedIn: "root"
})
export class RunnersService {
  private readonly URL = environment.URL;
  private readonly runnersEndpoint = environment.runnersEndpoint;
  private readonly addRunnerEndpoint = environment.addRunner;
  private readonly updateRunnerEndpoint = environment.updateRunner;
  private readonly deleteRunnerEndpoint = environment.deleteRunner;
  public updateTableSubject = new Subject<IRunner[]>();

  constructor(private http: HttpClient) {}

  public createRunner(runner: RunnerToCreate): Observable<any>  {
    const url: string = this.URL + this.addRunnerEndpoint;
    return this.http.post(url, runner);
  }

  public deleteRunner(runnerId: string): Observable<any>  {
    const url: string = this.URL + this.deleteRunnerEndpoint + '/' + runnerId;
    return this.http.post(url, {});
  }

  public updateRunner(runner: RunnerToUpdate): Observable<any> {
    const url: string = this.URL + this.updateRunnerEndpoint;
    return this.http.post(url, runner);
  }

  public getRunners(): Observable<IRunner[]> {
    const url: string = this.URL + this.runnersEndpoint;
    return this.http.get<IRunner[]>(url);
  }
  public updateTable() {
    this.getRunners().subscribe(
      res => {
        this.updateTableSubject.next(res);
      }
    );
  }
}