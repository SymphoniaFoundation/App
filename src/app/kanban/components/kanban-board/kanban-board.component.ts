import { Component, OnInit, Input } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sym-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {

  @Input() name;
  @Input() count = 10;
  items;

  faPlus = faPlus;

  constructor() {
  }

  ngOnInit() {
    this.items = Array.from(Array(this.count).keys());
  }

}
