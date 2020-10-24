import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminMainUiComponent } from './admin-main-ui.component';

describe('AdminMainUiComponent', () => {
  let component: AdminMainUiComponent;
  let fixture: ComponentFixture<AdminMainUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminMainUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminMainUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
