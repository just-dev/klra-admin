import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MachinaryCardDetailComponent } from './machinary-card-detail.component';

describe('MachinaryCardDetailComponent', () => {
  let component: MachinaryCardDetailComponent;
  let fixture: ComponentFixture<MachinaryCardDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MachinaryCardDetailComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MachinaryCardDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
