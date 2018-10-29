import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './containers/layout/layout.component';

const routes: Routes = [{
  path: '',
  component: LayoutComponent,
  children: [{
    path: '',
    pathMatch: 'full',
    redirectTo: 'dashboard'
  }, {
    path: 'dashboard',
    loadChildren: '../dashboard/dashboard.module#DashboardModule'
  }, {
    path: 'kanban',
    loadChildren: '../kanban/kanban.module#KanbanModule'
  }, {
    path: 'issue',
    loadChildren: '../issue/issue.module#IssueModule'
  }, {
    path: 'calendar',
    loadChildren: '../calendar/calendar.module#CalendarModule'
  }, {
    path: 'marketplace',
    loadChildren: '../marketplace/marketplace.module#MarketplaceModule'
  }, {
    path: 'channel/:hash',
    loadChildren: '../channel/channel.module#ChannelModule'
  }, {
    path: 'contact/:hash',
    loadChildren: '../contact/contact.module#ContactModule'
  }]
}];
// {
//   path: 'dashboard',
//   loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
// }


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SymphoniaRoutingModule { }
