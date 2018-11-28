import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { IssueRoutingModule } from './issue-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { IssueHeaderComponent } from './components/issue-header/issue-header.component';
import { IssueContainerComponent } from './components/issue-container/issue-container.component';
import { IssueItemComponent } from './components/issue-item/issue-item.component';

@NgModule({
  imports: [
    CommonModule,
    IssueRoutingModule,
    FlexLayoutModule
  ],
  declarations: [LayoutComponent, IssueHeaderComponent, IssueContainerComponent, IssueItemComponent]
})
export class IssueModule { }
