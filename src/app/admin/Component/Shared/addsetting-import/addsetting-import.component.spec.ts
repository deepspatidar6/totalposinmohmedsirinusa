import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsettingImportComponent } from './addsetting-import.component';

describe('AddsettingImportComponent', () => {
  let component: AddsettingImportComponent;
  let fixture: ComponentFixture<AddsettingImportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsettingImportComponent]
    });
    fixture = TestBed.createComponent(AddsettingImportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
