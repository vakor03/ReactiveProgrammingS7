import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Course} from "../model/course";

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent {

  @Input({required: true})
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Course card component - Course viewed: ")

    this.courseEmitter.emit(this.course);
  }

  isButtonVisible() {
    return this.course;
  }

  cardClasses() {
    if (this.course.category == 'BEGINNER') {
      return ['beginner'];
    }
    // return {
    //   'beginner': this.course.category == 'BEGINNER',
    // };
  }

  cardStyles() {
    return {
      'background-image': 'url(' + this.course.iconUrl + ')'
    }
  }
}