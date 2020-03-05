import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core/core.module';

import { TrainingRoutingModule } from './training-routing.module';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarComponent } from './components/calendar/calendar.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import { EditTrainingComponent } from './components/edit-training/edit-training.component';

@NgModule({
  declarations: [
    AddTrainingComponent,
    EditTrainingComponent,
    CalendarComponent
  ],
  entryComponents: [
    EditTrainingComponent
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
