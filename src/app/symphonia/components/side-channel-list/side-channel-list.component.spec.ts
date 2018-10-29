import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SideChannelListComponent } from './side-channel-list.component';

describe('SideChannelListComponent', () => {
  let component: SideChannelListComponent;
  let fixture: ComponentFixture<SideChannelListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SideChannelListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SideChannelListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
