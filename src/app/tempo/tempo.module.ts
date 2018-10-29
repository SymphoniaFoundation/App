import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { TempoRoutingModule } from './tempo-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    TempoRoutingModule,
    FlexLayoutModule,
  ],
  declarations: [
    LayoutComponent
  ]
})
export class TempoModule { }
