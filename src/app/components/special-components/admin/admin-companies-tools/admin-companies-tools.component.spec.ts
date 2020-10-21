import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCompaniesToolsComponent } from './admin-companies-tools.component';

describe('AdminCompaniesToolsComponent', () => {
  let component: AdminCompaniesToolsComponent;
  let fixture: ComponentFixture<AdminCompaniesToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCompaniesToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCompaniesToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
