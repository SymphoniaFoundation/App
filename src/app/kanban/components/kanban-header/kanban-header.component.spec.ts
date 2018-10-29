import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KanbanHeaderComponent } from './kanban-header.component';

describe('KanbanHeaderComponent', () => {
  let component: KanbanHeaderComponent;
  let fixture: ComponentFixture<KanbanHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KanbanHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KanbanHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
