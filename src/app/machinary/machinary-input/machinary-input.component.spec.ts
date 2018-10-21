import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinaryInputComponent } from './machinary-input.component';

describe('MachinaryInputComponent', () => {
  let component: MachinaryInputComponent;
  let fixture: ComponentFixture<MachinaryInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MachinaryInputComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinaryInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
