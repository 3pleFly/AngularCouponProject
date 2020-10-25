import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CouponsUiComponent } from './coupons-ui.component';

describe('CouponsUiComponent', () => {
  let component: CouponsUiComponent;
  let fixture: ComponentFixture<CouponsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CouponsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CouponsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
