import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxesAndDutiesComponent } from './taxes-and-duties.component';

describe('TaxesAndDutiesComponent', () => {
  let component: TaxesAndDutiesComponent;
  let fixture: ComponentFixture<TaxesAndDutiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TaxesAndDutiesComponent]
    });
    fixture = TestBed.createComponent(TaxesAndDutiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
