import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomersUiComponent } from './admin-customers-ui.component';

describe('AdminCustomersUiComponent', () => {
  let component: AdminCustomersUiComponent;
  let fixture: ComponentFixture<AdminCustomersUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCustomersUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomersUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
