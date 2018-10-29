import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './ui/containers/layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: '/symphonia'
  }, {
    path: 'setup',
    loadChildren: './setup/setup.module#SetupModule'
  }, {
    path: 'tempo',
    loadChildren: './tempo/tempo.module#TempoModule'
  }, {
    path: 'symphonia',
    loadChildren: './symphonia/symphonia.module#SymphoniaModule'
  }, {
    path: 'dex',
    loadChildren: './dex/dex.module#DexModule'
  }]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
