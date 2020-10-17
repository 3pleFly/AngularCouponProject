import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DualSigninComponent } from './dual-signin.component';

describe('DualSigninComponent', () => {
  let component: DualSigninComponent;
  let fixture: ComponentFixture<DualSigninComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DualSigninComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DualSigninComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
