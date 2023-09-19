import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarleftComponent } from './navbarleft.component';

describe('NavbarleftComponent', () => {
  let component: NavbarleftComponent;
  let fixture: ComponentFixture<NavbarleftComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavbarleftComponent]
    });
    fixture = TestBed.createComponent(NavbarleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
