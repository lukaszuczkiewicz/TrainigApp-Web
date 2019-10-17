import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './shared/layout/layout.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { CoreModule } from './core/core/core.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminModule } from './modules/admin/admin.module';

import { FullCalendarModule } from '@fullcalendar/angular'; // for FullCalendar!
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddTokenInterceptor } from './core/core/security/jwt.interceptor';
import { SharedModule } from './shared/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule,
    AppRoutingModule,
    LayoutModule,
    LoadingBarModule,
    CoreModule,
    ReactiveFormsModule,
    FormsModule,
    AdminModule,
    FullCalendarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AddTokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
