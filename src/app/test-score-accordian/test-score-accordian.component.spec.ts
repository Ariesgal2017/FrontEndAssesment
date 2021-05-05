import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestScoreAccordianComponent } from './test-score-accordian.component';

describe('TestScoreAccordianComponent', () => {
  let component: TestScoreAccordianComponent;
  let fixture: ComponentFixture<TestScoreAccordianComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestScoreAccordianComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestScoreAccordianComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
