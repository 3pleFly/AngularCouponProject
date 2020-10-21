import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCustomersToolsComponent } from './admin-customers-tools.component';

describe('AdminCustomersToolsComponent', () => {
  let component: AdminCustomersToolsComponent;
  let fixture: ComponentFixture<AdminCustomersToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCustomersToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCustomersToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
