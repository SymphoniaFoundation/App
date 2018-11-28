import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueStatusComponent } from './issue-status.component';

describe('IssueStatusComponent', () => {
  let component: IssueStatusComponent;
  let fixture: ComponentFixture<IssueStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
