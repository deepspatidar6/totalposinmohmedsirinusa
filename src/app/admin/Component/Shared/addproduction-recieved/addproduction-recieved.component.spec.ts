import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddproductionRecievedComponent } from './addproduction-recieved.component';

describe('AddproductionRecievedComponent', () => {
  let component: AddproductionRecievedComponent;
  let fixture: ComponentFixture<AddproductionRecievedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddproductionRecievedComponent]
    });
    fixture = TestBed.createComponent(AddproductionRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
