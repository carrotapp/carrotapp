import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpandedInfoComponent } from './expanded-info.component';

describe('ExpandedInfoComponent', () => {
  let component: ExpandedInfoComponent;
  let fixture: ComponentFixture<ExpandedInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpandedInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpandedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
