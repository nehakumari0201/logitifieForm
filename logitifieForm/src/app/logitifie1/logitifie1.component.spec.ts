import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Logitifie1Component } from './logitifie1.component';

describe('Logitifie1Component', () => {
  let component: Logitifie1Component;
  let fixture: ComponentFixture<Logitifie1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Logitifie1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Logitifie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
