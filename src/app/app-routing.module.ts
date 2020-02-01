import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LayoutComponent } from "./shared/layout/layout.component";
import { LoginComponent } from "./shared/login/login.component";
import { AdminPanelComponent } from "./modules/admin/admin-panel/admin-panel.component";
import { RegisterComponent } from './shared/register/register.component';
import { AuthGuarService } from './core/core/security/auth-guar.service';

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "register",
    component: RegisterComponent
  },
  {
    path: "",
    component: LayoutComponent,
    canActivate: [AuthGuarService],
    children: [
      {
        path: "dashboard",
        loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "training", 
        loadChildren: "./modules/training/training.module#TrainingModule"
      },
      {
        path: "admin",
        component: AdminPanelComponent
      },
      {
        path: "runners",
        loadChildren: "./modules/runners/runners.module#RunnersModule"
      }
    ]
  },
  { 
    path: "**", redirectTo: "", pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
