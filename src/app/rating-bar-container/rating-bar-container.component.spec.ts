import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingBarContainerComponent } from './rating-bar-container.component';

describe('RatingBarContainerComponent', () => {
  let component: RatingBarContainerComponent;
  let fixture: ComponentFixture<RatingBarContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingBarContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingBarContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
