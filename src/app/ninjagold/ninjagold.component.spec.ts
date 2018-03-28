import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NinjagoldComponent } from './ninjagold.component';

describe('NinjagoldComponent', () => {
  let component: NinjagoldComponent;
  let fixture: ComponentFixture<NinjagoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NinjagoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NinjagoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
