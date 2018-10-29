import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChannelHeaderComponent } from './channel-header.component';

describe('HeaderComponent', () => {
  let component: ChannelHeaderComponent;
  let fixture: ComponentFixture<ChannelHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChannelHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChannelHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
