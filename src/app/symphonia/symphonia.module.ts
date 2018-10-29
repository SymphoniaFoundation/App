import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SymphoniaRoutingModule } from './symphonia-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { SideListComponent } from './components/side-list/side-list.component';
import { SideProfileComponent } from './components/side-profile/side-profile.component';
import { SideChannelListComponent } from './components/side-channel-list/side-channel-list.component';
import { SideContactListComponent } from './components/side-contact-list/side-contact-list.component';
import { SideDappListComponent } from './components/side-dapp-list/side-dapp-list.component';

@NgModule({
  imports: [
    CommonModule,
    SymphoniaRoutingModule,
    FormsModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
  declarations: [
    LayoutComponent,
    SideListComponent,
    SideProfileComponent,
    SideChannelListComponent,
    SideContactListComponent,
    SideDappListComponent
  ]
})
export class SymphoniaModule { }
