import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrrenciesComponent } from './currrencies.component';

describe('CurrrenciesComponent', () => {
  let component: CurrrenciesComponent;
  let fixture: ComponentFixture<CurrrenciesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CurrrenciesComponent]
    });
    fixture = TestBed.createComponent(CurrrenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
