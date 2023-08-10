import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RootDashboardComponent } from './dashboard.component';

describe('DashboardComponent', () => {
  let component: RootDashboardComponent;
  let fixture: ComponentFixture<RootDashboardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RootDashboardComponent]
    });
    fixture = TestBed.createComponent(RootDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
