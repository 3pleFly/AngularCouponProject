import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyMainUiComponent } from './company-main-ui.component';

describe('CompanyMainUiComponent', () => {
  let component: CompanyMainUiComponent;
  let fixture: ComponentFixture<CompanyMainUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyMainUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyMainUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
