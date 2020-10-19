import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompaniesUiComponent } from './admin-companies-ui.component';

describe('AdminCompaniesUiComponent', () => {
  let component: AdminCompaniesUiComponent;
  let fixture: ComponentFixture<AdminCompaniesUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompaniesUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompaniesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
