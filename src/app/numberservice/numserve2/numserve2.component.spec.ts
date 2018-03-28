import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Numserve2Component } from './numserve2.component';

describe('Numserve2Component', () => {
  let component: Numserve2Component;
  let fixture: ComponentFixture<Numserve2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Numserve2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Numserve2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
