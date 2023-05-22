import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursecontentComponent } from './coursecontent.component';

describe('CoursecontentComponent', () => {
  let component: CoursecontentComponent;
  let fixture: ComponentFixture<CoursecontentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursecontentComponent]
    });
    fixture = TestBed.createComponent(CoursecontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
