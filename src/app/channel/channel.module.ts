import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { ChannelRoutingModule } from './channel-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { ChannelHeaderComponent } from './components/channel-header/channel-header.component';
import { ChannelComponent } from './components/channel/channel.component';
import { ChannelInputComponent } from './components/channel-input/channel-input.component';
import { ChannelContainerComponent } from './components/channel-container/channel-container.component';
import { ChannelMessageComponent } from './components/channel-message/channel-message.component';

@NgModule({
  imports: [
    CommonModule,
    ChannelRoutingModule,
    FormsModule,
    FlexLayoutModule,
    FontAwesomeModule,
  ],
  declarations: [
    LayoutComponent,
    ChannelHeaderComponent,
    ChannelComponent,
    ChannelInputComponent,
    ChannelContainerComponent,
    ChannelMessageComponent
  ]
})
export class ChannelModule { }
