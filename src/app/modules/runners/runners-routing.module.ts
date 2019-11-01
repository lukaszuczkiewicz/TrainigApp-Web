import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RunnersListComponent } from './components/runners-list/runners-list.component';

const routes: Routes = [
  {
    path: 'list',
    component: RunnersListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RunnersRoutingModule { }