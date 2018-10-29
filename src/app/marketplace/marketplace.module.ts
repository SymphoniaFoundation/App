import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    MarketplaceRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class MarketplaceModule { }
