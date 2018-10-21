import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardTest2Component } from './card-test2.component';

describe('CardTest2Component', () => {
  let component: CardTest2Component;
  let fixture: ComponentFixture<CardTest2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CardTest2Component]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardTest2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
