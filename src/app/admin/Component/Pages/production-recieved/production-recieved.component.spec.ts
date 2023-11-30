import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductionRecievedComponent } from './production-recieved.component';

describe('ProductionRecievedComponent', () => {
  let component: ProductionRecievedComponent;
  let fixture: ComponentFixture<ProductionRecievedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductionRecievedComponent]
    });
    fixture = TestBed.createComponent(ProductionRecievedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
