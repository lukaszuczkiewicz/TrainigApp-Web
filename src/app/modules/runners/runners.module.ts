import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RunnersRoutingModule } from './runners-routing.module';
import { RunnersListComponent } from './components/runners-list/runners-list.component';
import { CoreModule } from 'src/app/core/core/core.module';
import { CalendarComponent } from './components/calendar/calendar.component';

@NgModule({
  declarations: [RunnersListComponent, CalendarComponent],
  imports: [
    CommonModule,
    CoreModule,
    RunnersRoutingModule
  ]
})
export class RunnersModule { }
