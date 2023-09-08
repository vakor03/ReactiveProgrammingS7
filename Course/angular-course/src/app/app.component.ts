import {Component, ElementRef, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {Course} from "./model/course";
import {CourseCardComponent} from "./course-card/course-card.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  courses = COURSES;

  @ViewChild('cardRef1')
  card1: CourseCardComponent;

  @ViewChild('cardRef2', {read: ElementRef})
  card2: ElementRef;

  @ViewChild('container')
  containerDiv: ElementRef;

  onCourseSelected(course: Course) {

    console.log("card 1", this.card1);

    console.log("card 2", this.card2);

    console.log("container", this.containerDiv);
  }
}
