import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnPackageBoxComponent } from './return-package-box.component';

describe('ReturnPackageBoxComponent', () => {
  let component: ReturnPackageBoxComponent;
  let fixture: ComponentFixture<ReturnPackageBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReturnPackageBoxComponent]
    });
    fixture = TestBed.createComponent(ReturnPackageBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
