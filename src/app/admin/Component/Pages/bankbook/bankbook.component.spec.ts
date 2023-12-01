import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankbookComponent } from './bankbook.component';

describe('BankbookComponent', () => {
  let component: BankbookComponent;
  let fixture: ComponentFixture<BankbookComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BankbookComponent]
    });
    fixture = TestBed.createComponent(BankbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
