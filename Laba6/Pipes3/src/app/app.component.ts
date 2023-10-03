import {HttpService} from './http.service';
import {Observable} from 'rxjs';
import {Component, OnInit} from "@angular/core";

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li *ngFor="let user of users | async">
        <p>Ім’я користувача: {{user.name}}</p>
        <p>Вік користувача: {{user.age}}</p>
      </li>
    </ul>`,
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  users: Observable<User[]> | undefined;

  constructor(private httpService: HttpService) {
  }

  ngOnInit() {
    this.users = this.httpService.getUsers();
  }
}

export interface User {
  name: string;
  age: number;
}
