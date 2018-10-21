import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentStatusComponent } from './component-status.component';

describe('ComponentStatusComponent', () => {
  let component: ComponentStatusComponent;
  let fixture: ComponentFixture<ComponentStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ComponentStatusComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
