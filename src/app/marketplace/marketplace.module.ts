import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MarketplaceRoutingModule } from './marketplace-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { MarketplaceHeaderComponent } from './components/marketplace-header/marketplace-header.component';

@NgModule({
  imports: [
    CommonModule,
    MarketplaceRoutingModule,
    FlexLayoutModule
  ],
  declarations: [LayoutComponent, MarketplaceHeaderComponent]
})
export class MarketplaceModule { }
