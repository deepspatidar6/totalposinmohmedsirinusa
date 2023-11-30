import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductorderComponent } from './addproductorder.component';

describe('AddproductorderComponent', () => {
  let component: AddproductorderComponent;
  let fixture: ComponentFixture<AddproductorderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddproductorderComponent]
    });
    fixture = TestBed.createComponent(AddproductorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
