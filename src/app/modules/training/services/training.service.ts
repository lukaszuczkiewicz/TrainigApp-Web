import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { TrainingToCreate } from '../models/TrainingToCreate';
import { TrainingToGet } from '../models/TrainingToGet';
import { TrainingToUpdate } from '../models/TrainingToUpdate';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {
  private readonly URL = environment.URL;
  private readonly trainingsEndpoint = environment.trainings;
  private readonly addTrainingEndpoint = environment.addTraining;
  private readonly updateTrainingEndpoint = environment.updateTraining;
  public updateCalendarSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  public getTrainings(): Observable<TrainingToGet[]> {
    const url: string = this.URL + this.trainingsEndpoint;
    return this.http.get<TrainingToGet[]>(url);
  }

  public createTraining(training: TrainingToCreate): Observable<any>  {
    const url: string = this.URL + this.addTrainingEndpoint;
    return this.http.post(url, training);
  }
  
  public updateTraining(training: TrainingToUpdate): Observable<any>  {
    const url: string = this.URL + this.updateTrainingEndpoint;
    return this.http.post(url, training);
  }
  public updateCalendar() {
    this.updateCalendarSubject.next(true);
  }
}