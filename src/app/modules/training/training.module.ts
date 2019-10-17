import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from 'src/app/core/core/core.module';

import { TrainingRoutingModule } from './training-routing.module';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddTrainingComponent],
  imports: [
    CoreModule,
    CommonModule,
    TrainingRoutingModule,
    ReactiveFormsModule
  ]
})
export class TrainingModule { }
