import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVenderComponent } from './add-vender.component';

describe('AddVenderComponent', () => {
  let component: AddVenderComponent;
  let fixture: ComponentFixture<AddVenderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddVenderComponent]
    });
    fixture = TestBed.createComponent(AddVenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
