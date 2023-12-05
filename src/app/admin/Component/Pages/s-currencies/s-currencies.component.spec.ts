import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SCurrenciesComponent } from './s-currencies.component';

describe('SCurrenciesComponent', () => {
  let component: SCurrenciesComponent;
  let fixture: ComponentFixture<SCurrenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SCurrenciesComponent]
    });
    fixture = TestBed.createComponent(SCurrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
