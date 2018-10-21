import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsManageComponent } from './as-manage.component';

describe('AsManageComponent', () => {
  let component: AsManageComponent;
  let fixture: ComponentFixture<AsManageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AsManageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsManageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
