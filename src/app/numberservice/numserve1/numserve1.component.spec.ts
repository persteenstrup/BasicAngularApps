import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numserve1Component } from './numserve1.component';

describe('Numserve1Component', () => {
  let component: Numserve1Component;
  let fixture: ComponentFixture<Numserve1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numserve1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numserve1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
