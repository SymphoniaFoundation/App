import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarRoutingModule } from './calendar-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class CalendarModule { }
