import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketplaceHeaderComponent } from './marketplace-header.component';

describe('MarketplaceHeaderComponent', () => {
  let component: MarketplaceHeaderComponent;
  let fixture: ComponentFixture<MarketplaceHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarketplaceHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarketplaceHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
