import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerUiComponent } from './customer-ui.component';

describe('CustomerUiComponent', () => {
  let component: CustomerUiComponent;
  let fixture: ComponentFixture<CustomerUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
