import { Component, OnInit, Input } from '@angular/core';

import { Card } from '../kanban-container/kanban-container.component';

@Component({
  selector: 'sym-kanban-card',
  templateUrl: './kanban-card.component.html',
  styleUrls: ['./kanban-card.component.scss']
})
export class KanbanCardComponent implements OnInit {

  @Input() item: Card;
  @Input() color: string;

  constructor() { }

  ngOnInit() {
  }

}
