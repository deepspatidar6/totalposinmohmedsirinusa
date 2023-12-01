import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddpurchseBillEntryComponent } from './addpurchse-bill-entry.component';

describe('AddpurchseBillEntryComponent', () => {
  let component: AddpurchseBillEntryComponent;
  let fixture: ComponentFixture<AddpurchseBillEntryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddpurchseBillEntryComponent]
    });
    fixture = TestBed.createComponent(AddpurchseBillEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
