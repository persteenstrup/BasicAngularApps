import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numserve3Component } from './numserve3.component';

describe('Numserve3Component', () => {
  let component: Numserve3Component;
  let fixture: ComponentFixture<Numserve3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numserve3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numserve3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
