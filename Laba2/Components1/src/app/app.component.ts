import {Component} from '@angular/core';

@Component({
  selector: 'my-component1-app',
  template: `<label>Введіть ім'я:</label>

  <input [(ngModel)]="name" placeholder="name">
  <h1>Ласкаво просимо {{name}}!</h1>
  <h2>Hello Angular</h2>
  <p>Angular 16 представляє модульну архітектуру додатку</p>
  <child-comp><h2>Ласкаво просимо {{name}}!</h2></child-comp>
  <p>Hello {{name}}</p>
  `,
  styles: [` h3 {
    color: navy;
  }

  h2, p {
    color: navy;
  }`]
})
export class AppComponent {
  name = 'Петро';
}
