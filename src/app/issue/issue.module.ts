import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IssueRoutingModule } from './issue-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { IssueHeaderComponent } from './components/issue-header/issue-header.component';

@NgModule({
  imports: [
    CommonModule,
    IssueRoutingModule,
    FlexLayoutModule
  ],
  declarations: [LayoutComponent, IssueHeaderComponent]
})
export class IssueModule { }
