import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SgiftCardComponent } from './sgift-card.component';

describe('SgiftCardComponent', () => {
  let component: SgiftCardComponent;
  let fixture: ComponentFixture<SgiftCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SgiftCardComponent]
    });
    fixture = TestBed.createComponent(SgiftCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
