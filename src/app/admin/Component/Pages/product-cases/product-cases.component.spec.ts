import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductCasesComponent } from './product-cases.component';

describe('ProductCasesComponent', () => {
  let component: ProductCasesComponent;
  let fixture: ComponentFixture<ProductCasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductCasesComponent]
    });
    fixture = TestBed.createComponent(ProductCasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
