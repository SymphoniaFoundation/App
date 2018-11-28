import { Component, OnInit, Input } from '@angular/core';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import { KanbanBoard } from '../kanban-container/kanban-container.component';

@Component({
  selector: 'sym-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  @Input() data: KanbanBoard;

  faEllipsisH = faEllipsisH;

  constructor() {
  }

  ngOnInit() {
  }

}
