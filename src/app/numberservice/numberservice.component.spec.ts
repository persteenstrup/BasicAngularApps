import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberserviceComponent } from './numberservice.component';

describe('NumberserviceComponent', () => {
  let component: NumberserviceComponent;
  let fixture: ComponentFixture<NumberserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NumberserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
