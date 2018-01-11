import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstTimeCardComponent } from './first-time-card.component';

describe('FirstTimeCardComponent', () => {
  let component: FirstTimeCardComponent;
  let fixture: ComponentFixture<FirstTimeCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstTimeCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstTimeCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
