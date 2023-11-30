import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortItemOrderComponent } from './sort-item-order.component';

describe('SortItemOrderComponent', () => {
  let component: SortItemOrderComponent;
  let fixture: ComponentFixture<SortItemOrderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortItemOrderComponent]
    });
    fixture = TestBed.createComponent(SortItemOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
