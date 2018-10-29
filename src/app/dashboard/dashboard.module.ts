import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule
  ],
  declarations: [LayoutComponent, DashboardHeaderComponent]
})
export class DashboardModule { }
