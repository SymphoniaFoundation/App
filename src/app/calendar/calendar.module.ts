import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { CalendarRoutingModule } from './calendar-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { CalendarHeaderComponent } from './components/calendar-header/calendar-header.component';

@NgModule({
  imports: [
    CommonModule,
    CalendarRoutingModule,
    FlexLayoutModule
  ],
  declarations: [LayoutComponent, CalendarHeaderComponent]
})
export class CalendarModule { }
