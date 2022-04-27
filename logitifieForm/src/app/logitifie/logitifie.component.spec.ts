import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogitifieComponent } from './logitifie.component';

describe('LogitifieComponent', () => {
  let component: LogitifieComponent;
  let fixture: ComponentFixture<LogitifieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogitifieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogitifieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
