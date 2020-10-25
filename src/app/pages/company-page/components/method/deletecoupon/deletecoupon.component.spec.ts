import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletecouponComponent } from './deletecoupon.component';

describe('DeletecouponComponent', () => {
  let component: DeletecouponComponent;
  let fixture: ComponentFixture<DeletecouponComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletecouponComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletecouponComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
