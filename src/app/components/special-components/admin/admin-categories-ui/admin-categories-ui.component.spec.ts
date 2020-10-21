import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriesUiComponent } from './admin-categories-ui.component';

describe('AdminCategoriesUiComponent', () => {
  let component: AdminCategoriesUiComponent;
  let fixture: ComponentFixture<AdminCategoriesUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoriesUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriesUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
