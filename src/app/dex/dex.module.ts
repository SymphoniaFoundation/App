import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DexRoutingModule } from './dex-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
    DexRoutingModule
  ],
  declarations: [LayoutComponent]
})
export class DexModule { }
