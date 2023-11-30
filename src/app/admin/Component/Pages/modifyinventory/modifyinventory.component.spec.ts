import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyinventoryComponent } from './modifyinventory.component';

describe('ModifyinventoryComponent', () => {
  let component: ModifyinventoryComponent;
  let fixture: ComponentFixture<ModifyinventoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyinventoryComponent]
    });
    fixture = TestBed.createComponent(ModifyinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
