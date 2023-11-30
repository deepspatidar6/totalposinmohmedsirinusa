import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddprtmanageComponent } from './addprtmanage.component';

describe('AddprtmanageComponent', () => {
  let component: AddprtmanageComponent;
  let fixture: ComponentFixture<AddprtmanageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddprtmanageComponent]
    });
    fixture = TestBed.createComponent(AddprtmanageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
