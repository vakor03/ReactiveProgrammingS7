import {Component, Inject, Injectable, InjectionToken, Injector, OnInit, Optional, Self, SkipSelf} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {CoursesService} from "./services/courses.service";
import {APP_CONFIG, AppConfig, CONFIG_TOKEN} from "../config";
import {COURSES} from "../db-data";
import {CourseTitleComponent} from "./course-title/course-title.component";
import {createCustomElement} from "@angular/elements";
import {CourseCardComponent} from "./courses/course-card/course-card.component";
import {CourseImageComponent} from "./courses/course-image/course-image.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [
    CourseCardComponent,
    CourseImageComponent,
    NgForOf
  ],
  standalone: true
})
export class AppComponent implements OnInit {

  // courses$: Observable<Course[]>;
  courses = COURSES;

  coursesTotal = this.courses.length;

  constructor(private coursesService: CoursesService,
              @Inject(CONFIG_TOKEN) private config: AppConfig,
              private injector: Injector) {

    console.log(config)
  }

  ngOnInit() {
    const htmlElement = createCustomElement(CourseTitleComponent, {injector: this.injector});

    customElements.define('course-title', htmlElement);
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(
      () => console.log("saved")
    );
  }
}

