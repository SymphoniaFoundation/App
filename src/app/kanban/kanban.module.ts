import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { KanbanRoutingModule } from './kanban-routing.module';
import { LayoutComponent } from './containers/layout/layout.component';
import { KanbanHeaderComponent } from './components/kanban-header/kanban-header.component';
import { KanbanContainerComponent } from './components/kanban-container/kanban-container.component';
import { KanbanBoardComponent } from './components/kanban-board/kanban-board.component';
import { KanbanCardComponent } from './components/kanban-card/kanban-card.component';

@NgModule({
  imports: [
    CommonModule,
    KanbanRoutingModule,
    FlexLayoutModule,
    FontAwesomeModule
  ],
  declarations: [LayoutComponent, KanbanHeaderComponent, KanbanContainerComponent, KanbanBoardComponent, KanbanCardComponent]
})
export class KanbanModule { }
