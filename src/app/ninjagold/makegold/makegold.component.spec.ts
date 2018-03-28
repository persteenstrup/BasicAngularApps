import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakegoldComponent } from './makegold.component';

describe('MakegoldComponent', () => {
  let component: MakegoldComponent;
  let fixture: ComponentFixture<MakegoldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakegoldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakegoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
