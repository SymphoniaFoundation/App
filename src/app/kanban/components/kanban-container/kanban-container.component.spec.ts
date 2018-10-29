import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanContainerComponent } from './kanban-container.component';

describe('KanbanContainerComponent', () => {
  let component: KanbanContainerComponent;
  let fixture: ComponentFixture<KanbanContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
