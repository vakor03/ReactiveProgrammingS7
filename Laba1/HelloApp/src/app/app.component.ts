import { Component } from '@angular/core';
@Component({
  selector: 'my-hello-app',
  template: `<label>Введіть ім'я:</label>

<input [(ngModel)]="name" placeholder="name">
<h1>Ласкаво просимо {{name}}!</h1>`

})
export class AppComponent {
  name=' ';
}
