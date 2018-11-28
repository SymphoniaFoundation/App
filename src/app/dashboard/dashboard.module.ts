import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { DashboardHeaderComponent } from './components/dashboard-header/dashboard-header.component';
import { IssueStatusComponent } from './components/issue-status/issue-status.component';
import { TokenStatusComponent } from './components/token-status/token-status.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FlexLayoutModule
  ],
  declarations: [LayoutComponent, DashboardHeaderComponent, IssueStatusComponent, TokenStatusComponent]
})
export class DashboardModule { }
