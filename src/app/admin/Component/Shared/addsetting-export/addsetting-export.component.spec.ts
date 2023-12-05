import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsettingExportComponent } from './addsetting-export.component';

describe('AddsettingExportComponent', () => {
  let component: AddsettingExportComponent;
  let fixture: ComponentFixture<AddsettingExportComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsettingExportComponent]
    });
    fixture = TestBed.createComponent(AddsettingExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
