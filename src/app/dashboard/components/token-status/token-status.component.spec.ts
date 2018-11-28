import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TokenStatusComponent } from './token-status.component';

describe('TokenStatusComponent', () => {
  let component: TokenStatusComponent;
  let fixture: ComponentFixture<TokenStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TokenStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TokenStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
