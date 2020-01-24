import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunnersListComponent } from './components/runners-list/runners-list.component';
import { AddRunnerComponent } from './components/add-runner/add-runner.component';

const routes: Routes = [
  {
    path: '',
    component: RunnersListComponent
  },
  {
    path: 'add',
    component: AddRunnerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnersRoutingModule { }