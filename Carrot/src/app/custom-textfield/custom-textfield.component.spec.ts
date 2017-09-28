import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomTextfieldComponent } from './custom-textfield.component';

describe('CustomTextfieldComponent', () => {
  let component: CustomTextfieldComponent;
  let fixture: ComponentFixture<CustomTextfieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomTextfieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomTextfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
