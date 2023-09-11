import {Component, Inject, InjectionToken, OnInit} from '@angular/core';
import {Course} from './model/course';
import {Observable} from 'rxjs';
import {CoursesService} from "./services/courses.service";
import {HttpClient} from "@angular/common/http";

function coursesServiceProvider(http: HttpClient): CoursesService {
  return new CoursesService(http);
}

export const COURSES_SERVICE = new InjectionToken<CoursesService>('COURSES_SERVICE');

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide: COURSES_SERVICE,
      useFactory: coursesServiceProvider,
      deps: [HttpClient]
    }
  ]
})
export class AppComponent implements OnInit {

  courses$: Observable<Course[]>;

  constructor(@Inject(COURSES_SERVICE)private coursesService: CoursesService) {

  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  save(course: Course) {
    this.coursesService.saveCourse(course).subscribe(
      () => console.log("saved")
    );
  }
}

