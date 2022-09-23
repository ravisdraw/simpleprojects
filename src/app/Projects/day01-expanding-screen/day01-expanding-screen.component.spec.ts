import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Day01ExpandingScreenComponent } from './day01-expanding-screen.component';

describe('Day01ExpandingScreenComponent', () => {
  let component: Day01ExpandingScreenComponent;
  let fixture: ComponentFixture<Day01ExpandingScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Day01ExpandingScreenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Day01ExpandingScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
