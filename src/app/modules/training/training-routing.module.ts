import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddTrainingComponent } from './components/add-training/add-training.component';
import { TrainingListComponent } from './components/training-list/training-list.component';

const routes: Routes = [
  {
    path: '',
    component: TrainingListComponent
  },
  {
    path: 'add',
    component: AddTrainingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingRoutingModule { }
