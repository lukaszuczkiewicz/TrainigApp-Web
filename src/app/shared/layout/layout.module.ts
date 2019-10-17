import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HeaderComponent } from './header/header.component';
import { CoreModule } from 'src/app/core/core/core.module';
import { VerticalMenuComponent } from './vertical-menu/vertical-menu.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, VerticalMenuComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    CoreModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
