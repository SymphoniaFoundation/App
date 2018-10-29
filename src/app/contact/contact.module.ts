import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ContactRoutingModule } from './contact-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { ContactHeaderComponent } from './components/contact-header/contact-header.component';

@NgModule({
  imports: [
    CommonModule,
    ContactRoutingModule,
    FlexLayoutModule
  ],
  declarations: [LayoutComponent, ContactHeaderComponent]
})
export class ContactModule { }
