import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductMcomponentsComponent } from './product-mcomponents.component';

describe('ProductMcomponentsComponent', () => {
  let component: ProductMcomponentsComponent;
  let fixture: ComponentFixture<ProductMcomponentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProductMcomponentsComponent]
    });
    fixture = TestBed.createComponent(ProductMcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
