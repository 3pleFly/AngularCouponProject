import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoriesToolsComponent } from './admin-categories-tools.component';

describe('AdminCategoriesToolsComponent', () => {
  let component: AdminCategoriesToolsComponent;
  let fixture: ComponentFixture<AdminCategoriesToolsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoriesToolsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoriesToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
