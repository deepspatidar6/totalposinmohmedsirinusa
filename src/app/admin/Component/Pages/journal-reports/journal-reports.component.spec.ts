import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JournalReportsComponent } from './journal-reports.component';

describe('JournalReportsComponent', () => {
  let component: JournalReportsComponent;
  let fixture: ComponentFixture<JournalReportsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [JournalReportsComponent]
    });
    fixture = TestBed.createComponent(JournalReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
