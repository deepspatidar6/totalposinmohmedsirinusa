import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProductcasesComponent } from './add-productcases.component';

describe('AddProductcasesComponent', () => {
  let component: AddProductcasesComponent;
  let fixture: ComponentFixture<AddProductcasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddProductcasesComponent]
    });
    fixture = TestBed.createComponent(AddProductcasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
