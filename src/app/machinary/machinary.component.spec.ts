import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinaryComponent } from './machinary.component';

describe('MachinaryComponent', () => {
  let component: MachinaryComponent;
  let fixture: ComponentFixture<MachinaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MachinaryComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
