import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoldcountComponent } from './goldcount.component';

describe('GoldcountComponent', () => {
  let component: GoldcountComponent;
  let fixture: ComponentFixture<GoldcountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoldcountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoldcountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
