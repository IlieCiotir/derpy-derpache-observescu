import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GooglyEyeComponent } from './googly-eye.component';

describe('GooglyEyeComponent', () => {
  let component: GooglyEyeComponent;
  let fixture: ComponentFixture<GooglyEyeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GooglyEyeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GooglyEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
