import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core/core.module';

import { TrainingRoutingModule } from './training-routing.module';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TrainingListComponent } from './components/training-list/training-list.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    AddTrainingComponent,
    TrainingListComponent,
    CalendarComponent
  ],
  imports: [
    CoreModule,
    CommonModule,
    TrainingRoutingModule,
    ReactiveFormsModule,
    FullCalendarModule
  ]
})
export class TrainingModule { }
