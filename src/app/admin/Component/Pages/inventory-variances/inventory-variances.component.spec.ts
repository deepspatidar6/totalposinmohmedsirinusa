import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InventoryVariancesComponent } from './inventory-variances.component';

describe('InventoryVariancesComponent', () => {
  let component: InventoryVariancesComponent;
  let fixture: ComponentFixture<InventoryVariancesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InventoryVariancesComponent]
    });
    fixture = TestBed.createComponent(InventoryVariancesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
