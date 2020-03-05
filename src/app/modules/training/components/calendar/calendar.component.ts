import { Component, ViewChild, OnInit } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';
import { MatDialog } from '@angular/material';

import { TrainingService } from '../../services/training.service';
import { EditTrainingComponent } from '../edit-training/edit-training.component';
import { Training } from '../../models/Training';
import { TrainingToGet } from '../../models/TrainingToGet';
import { AlertService } from 'src/app/shared/services/alert.service';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  @ViewChild('calendar') calendarComponent: FullCalendarComponent;

  calendarVisible = true;
  // calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarPlugins = [dayGridPlugin, interactionPlugin, listPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[];
  trainings: TrainingToGet[];
  
  constructor(private trainingService: TrainingService,
    private dialog: MatDialog,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadEvents();
    this.calendarComponent.eventClick.subscribe(e => {
      const id = e.event.id;
      const training = this.trainings.find(t => t.id === id)
      this.dialog.open(EditTrainingComponent, {
        data: {
          training
        }
      });
    })
    this.trainingService.updateCalendarSubject.subscribe(
      res => {
        this.loadEvents();
      }
    )
  }
  
  loadEvents() {
    this.trainingService.getTrainings().subscribe(
      res => {
        this.trainings = res;
        this.calendarEvents = this.trainings;
        res.forEach(t => {
          let formattedDate = new Date(t.dateToDo);
    
          console.log('res: '+ formattedDate);
          const info = `Runner: ${t.firstName} ${t.lastName}
          Training: ${t.details}
          Comment: ${t.comment}`;
          this.calendarEvents.push({ title: info, start: t.dateToDo, allDay: true, id: t.id})
        })
      }, err => {
        this.alertService.error(`Couldn't load events.`);
      });
  }
  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    let calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01'); // call a method on the Calendar object
  }
  handleDateClick() {

  }
}
