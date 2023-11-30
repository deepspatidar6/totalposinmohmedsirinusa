import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddinvestersComponent } from './addinvesters.component';

describe('AddinvestersComponent', () => {
  let component: AddinvestersComponent;
  let fixture: ComponentFixture<AddinvestersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddinvestersComponent]
    });
    fixture = TestBed.createComponent(AddinvestersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
