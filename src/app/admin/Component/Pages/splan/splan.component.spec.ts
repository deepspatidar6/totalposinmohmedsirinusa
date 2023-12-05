import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplanComponent } from './splan.component';

describe('SplanComponent', () => {
  let component: SplanComponent;
  let fixture: ComponentFixture<SplanComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SplanComponent]
    });
    fixture = TestBed.createComponent(SplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
