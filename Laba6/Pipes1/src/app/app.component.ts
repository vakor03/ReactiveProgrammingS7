import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
      <div>Без форматування: {{myDate}}</div>
      <div>З форматуванням: {{myDate | date}}</div>
      <div>{{welcome | uppercase}}</div>
      <div>{{welcome | lowercase}}</div>
      <div>{{percent | percent}}</div>
      <div>{{percent | currency}}</div>

      <div>{{welcome | slice: 3}}</div>
      <div>{{welcome | slice: 6: 11}}</div>
      <div>{{myNewDate | date: 'dd/MM/yyyy'}}</div>

      <div>{{pi | number:'2.1-2'}}</div>
      <div>{{pi | number:'3.5-5'}}</div>

      <div>{{money | currency:'UAH':'code'}}</div>
      <div>{{money | currency:'UAH':'symbol-narrow'}}</div>
      <div>{{money | currency:'UAH':'symbol':'1.1-1'}}</div>
      <div>{{money | currency:'UAH':'symbol-narrow':'1.1-1'}}</div>
      <div>{{money | currency:'UAH':'Тільки сьогодні по ціні '}}</div>\`

      <div>{{message | slice:6:11 | uppercase}}</div>

      <div>Число до форматування: {{x}}</div>
      <div>Число після форматування: {{x | format}}</div>
      <hr/>

      <div>{{users | join}}</div>
      <div>{{users | join: 1}}</div>
      <div>{{users | join: 1: 3}}</div>

      <hr/>
      <div>Number: {{x}}</div>
      <div>Number with sqrt pipe: {{x | sqrt}}</div>
  `
})
export class AppComponent {
  myDate: Date = new Date(2003,6,2);
  welcome: string = 'Welcome to my World!';
  percent: number = 0.259;
  myNewDate = Date.now();
  pi: number = 3.14159265359;
  money: number = 232.12;
  message = 'Hello World!';
  x: number = 15.4545;
  users = ["Tom", "Bob", "Sam", "Bill", "Ann"];
}
