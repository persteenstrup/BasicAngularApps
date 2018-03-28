import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailSubComponent } from './email-sub.component';

describe('EmailSubComponent', () => {
  let component: EmailSubComponent;
  let fixture: ComponentFixture<EmailSubComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmailSubComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
