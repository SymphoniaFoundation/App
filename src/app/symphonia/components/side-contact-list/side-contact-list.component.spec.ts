import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideContactListComponent } from './side-contact-list.component';

describe('SideContactListComponent', () => {
  let component: SideContactListComponent;
  let fixture: ComponentFixture<SideContactListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideContactListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideContactListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
