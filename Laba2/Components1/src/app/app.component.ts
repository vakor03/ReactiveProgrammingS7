import {Component} from '@angular/core';

@Component({
  selector: 'my-component1-app',
  template: `
      <label>Введіть ім'я:</label>

      <input [(ngModel)]="name" placeholder="name">
      <h1>Ласкаво просимо {{name}}!</h1>
      <h2>Hello Angular</h2>
      <p>Angular 16 представляє модульну архітектуру додатку</p>
      <child-comp></child-comp>
      <p>Hello {{name}}</p>`,
  styles: [`h2, p {color:#333;}`]
  // templateUrl: './app.component.html',
  // styleUrls: ['./app.component.css']

  // template: `
  //   <label>Введіть ім'я:</label>
  //   <input [(ngModel)]="name" placeholder="name">
  //   <h1>Ласкаво просимо {{name}}!</h1>
  //   <h2>Hello Angular</h2>
  //   <p>Angular 16 представляє модульну архітектуру додатку</p>`,

  // styles: [`
  //   h1, h2 {
  //     color: navy;
  //   }
  //
  //   p {
  //     font-size: 13px;
  //   }
  //
  //   :host {
  //     font-family: Verdana;
  //     color: #555;
  //   }
  // `]


})

export class AppComponent {
  title = 'Components1';
  name = "";
}
