import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideDappListComponent } from './side-dapp-list.component';

describe('SideDappListComponent', () => {
  let component: SideDappListComponent;
  let fixture: ComponentFixture<SideDappListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideDappListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideDappListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
