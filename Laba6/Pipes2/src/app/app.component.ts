import { Component} from '@angular/core';
import {interval, map, Observable} from "rxjs";
@Component({
  selector: 'my-app',
  template: `
    <input [(ngModel)]="num" name="fact">
    <div>Результат: {{num | format}}</div>
    <hr/>
    <input #user name="user" class="form-control">
    <button class="btn" (click)="users.push(user.value)">Add</button>
    <p>{{users | join}}</p>
    <p>Модель: {{phone | async}}</p>
  `
})
export class AppComponent {
  num: number = 15.45;
  users = ["Tom", "Alice", "Sam", "Kate", "Bob"];
  phones = ["iPhone 7", "LG G 5", "Honor 8", "Samsung Galaxy S7", "Motorola Moto Z"];
  phone: Observable<string>|undefined;

  constructor() {
    this.showPhones();
  }

  showPhones() {
    this.phone = interval(1000).pipe(map((i:number)=> this.phones[i%this.phones.length]));
  }
}
