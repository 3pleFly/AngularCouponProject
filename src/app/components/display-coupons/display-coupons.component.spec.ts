import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayCouponsComponent } from './display-coupons.component';

describe('DisplayCouponsComponent', () => {
  let component: DisplayCouponsComponent;
  let fixture: ComponentFixture<DisplayCouponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayCouponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
