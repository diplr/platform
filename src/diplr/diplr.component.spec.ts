import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiplrComponent } from './diplr.component';

describe('DiplrComponent', () => {
  let component: DiplrComponent;
  let fixture: ComponentFixture<DiplrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiplrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiplrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
