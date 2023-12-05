import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsettingAddlanguageComponent } from './addsetting-addlanguage.component';

describe('AddsettingAddlanguageComponent', () => {
  let component: AddsettingAddlanguageComponent;
  let fixture: ComponentFixture<AddsettingAddlanguageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddsettingAddlanguageComponent]
    });
    fixture = TestBed.createComponent(AddsettingAddlanguageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
