import {Input, Component} from '@angular/core';

@Component({
  selector: 'child-comp',
  template: `<p>Ім’я користувача: {{userName}}</p>
  <p>Вік користувача: {{userAge}}</p>`
})
export class ChildComponent {
  @Input() userName: string = "";
  _userAge: number = 0;
  @Input()
  set userAge(age: number) {
    if (age < 0)
      this._userAge = 0;
    else if (age > 100)
      this._userAge = 100;
    else
      this._userAge = age;
  }

  get userAge() {
    return this._userAge;
  }
}
