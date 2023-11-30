import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsortItemComponent } from './addsort-item.component';

describe('AddsortItemComponent', () => {
  let component: AddsortItemComponent;
  let fixture: ComponentFixture<AddsortItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsortItemComponent]
    });
    fixture = TestBed.createComponent(AddsortItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
