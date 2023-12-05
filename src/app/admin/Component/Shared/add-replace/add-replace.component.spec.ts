import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddReplaceComponent } from './add-replace.component';

describe('AddReplaceComponent', () => {
  let component: AddReplaceComponent;
  let fixture: ComponentFixture<AddReplaceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddReplaceComponent]
    });
    fixture = TestBed.createComponent(AddReplaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
