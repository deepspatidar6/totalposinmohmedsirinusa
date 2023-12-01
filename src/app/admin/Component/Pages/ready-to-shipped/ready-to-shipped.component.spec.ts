import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadyToShippedComponent } from './ready-to-shipped.component';

describe('ReadyToShippedComponent', () => {
  let component: ReadyToShippedComponent;
  let fixture: ComponentFixture<ReadyToShippedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReadyToShippedComponent]
    });
    fixture = TestBed.createComponent(ReadyToShippedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
