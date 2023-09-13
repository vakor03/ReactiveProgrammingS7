import {
  AfterContentChecked,
  AfterContentInit, AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Input, OnChanges, OnDestroy,
  OnInit,
  Output,
  QueryList, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import {Course} from '../../model/course';
import {CourseImageComponent} from '../course-image/course-image.component';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
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
