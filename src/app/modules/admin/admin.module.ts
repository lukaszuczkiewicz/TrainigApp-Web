import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { CoreModule } from 'src/app/core/core/core.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminPanelComponent],
  imports: [
    CommonModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
