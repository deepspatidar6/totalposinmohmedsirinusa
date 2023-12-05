import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSelectAPlanComponent } from './add-select-a-plan.component';

describe('AddSelectAPlanComponent', () => {
  let component: AddSelectAPlanComponent;
  let fixture: ComponentFixture<AddSelectAPlanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddSelectAPlanComponent]
    });
    fixture = TestBed.createComponent(AddSelectAPlanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
