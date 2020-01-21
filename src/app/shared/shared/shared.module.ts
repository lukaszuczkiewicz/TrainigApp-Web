import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { CoreModule } from 'src/app/core/core/core.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReportIssueComponent } from '../report-issue/report-issue.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    ReportIssueComponent
  ],
  imports: [
    CommonModule,
    CoreModule,
    NgxQRCodeModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
  ],
  entryComponents: [
    ReportIssueComponent
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
  ]
})
export class SharedModule { }
