import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardsComponent } from './rewards.component';

describe('RewardsComponent', () => {
  let component: RewardsComponent;
  let fixture: ComponentFixture<RewardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RewardsComponent]
    });
    fixture = TestBed.createComponent(RewardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});