import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoundownTimerContainerComponent } from './coundown-timer-container.component';

describe('CoundownTimerContainerComponent', () => {
  let component: CoundownTimerContainerComponent;
  let fixture: ComponentFixture<CoundownTimerContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoundownTimerContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoundownTimerContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
