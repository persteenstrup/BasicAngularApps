import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistorygoldComponent } from './historygold.component';

describe('HistorygoldComponent', () => {
  let component: HistorygoldComponent;
  let fixture: ComponentFixture<HistorygoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistorygoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistorygoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
