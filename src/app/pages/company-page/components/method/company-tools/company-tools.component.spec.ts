import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyToolsComponent } from './company-tools.component';

describe('CompanyToolsComponent', () => {
  let component: CompanyToolsComponent;
  let fixture: ComponentFixture<CompanyToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
