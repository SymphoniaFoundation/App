import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { UiRoutingModule } from './ui-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { CommunityListComponent } from './components/community-list/community-list.component';

@NgModule({
  imports: [
    CommonModule,
    UiRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [LayoutComponent, CommunityListComponent]
})
export class UiModule { }
