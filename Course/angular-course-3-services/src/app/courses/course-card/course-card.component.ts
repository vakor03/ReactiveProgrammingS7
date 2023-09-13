import {
  Component,
  EventEmitter,
  Input, Output
} from '@angular/core';
import {Course} from '../../model/course';
import {NgIf} from "@angular/common";

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
  standalone: true,
  imports: [
    NgIf
  ]
})
export class CourseCardComponent {

  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output('courseChanged')
  courseEmitter = new EventEmitter<Course>();


  constructor() {

  }

  onSaveClicked(description: string) {

    this.courseEmitter.emit({...this.course, description});

  }


  onTitleChanged(newTitle: string) {
    this.course.description = newTitle;
  }
}
