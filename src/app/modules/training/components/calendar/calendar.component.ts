import { Component, ViewChild, OnInit } from '@angular/core';
import { TrainingService } from '../../services/training.service';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
// import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import listPlugin from '@fullcalendar/list';

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
  
  constructor(private trainingService: TrainingService) { }

  ngOnInit(): void {
    this.loadEvents();
  }
  
  loadEvents() {
    this.trainingService.getTrainings().subscribe(
      res => {
        console.log(res);
        this.calendarEvents = [];
        res.forEach(t => {
          const info = `Runner: ${t.firstName} ${t.lastName}
          Training: ${t.details}
          Comment: ${t.comment}`;
          this.calendarEvents.push({ title: info, start: t.dateToDo})
        })
        
      }, err => {
        console.log(err);
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

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({ // add new event data. must create new array
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      })
    }
  }
}
