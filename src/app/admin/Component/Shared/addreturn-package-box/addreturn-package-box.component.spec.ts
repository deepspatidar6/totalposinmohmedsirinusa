import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddreturnPackageBoxComponent } from './addreturn-package-box.component';

describe('AddreturnPackageBoxComponent', () => {
  let component: AddreturnPackageBoxComponent;
  let fixture: ComponentFixture<AddreturnPackageBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddreturnPackageBoxComponent]
    });
    fixture = TestBed.createComponent(AddreturnPackageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
