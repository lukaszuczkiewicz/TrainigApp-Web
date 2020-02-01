import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RunnersListComponent } from "./components/runners-list/runners-list.component";
import { RunnersRoutingModule } from "./runners-routing.module";
import { CoreModule } from "src/app/core/core/core.module";
import { AddRunnerComponent } from './components/add-runner/add-runner.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditRunnerComponent } from './components/edit-runner/edit-runner.component';

@NgModule({
  declarations: [AddRunnerComponent, EditRunnerComponent, RunnersListComponent],
  entryComponents: [EditRunnerComponent],
  imports: [CommonModule, RunnersRoutingModule, CoreModule, ReactiveFormsModule]
})
export class RunnersModule {}
