import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { RunnersListComponent } from "./components/runners-list/runners-list.component";
import { RunnersRoutingModule } from "./runners-routing.module";
import { CoreModule } from "src/app/core/core/core.module";
import { AddRunnerComponent } from './components/add-runner/add-runner.component';

@NgModule({
  declarations: [AddRunnerComponent, RunnersListComponent],
  imports: [CommonModule, RunnersRoutingModule, CoreModule]
})
export class RunnersModule {}
