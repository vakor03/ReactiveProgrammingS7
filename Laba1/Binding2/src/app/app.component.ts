import {Component} from '@angular/core';
import {blue} from "ansi-colors";

@Component({
  selector: 'my-binding2-app',
  template: `
    <div [class.isredbox]="isRed"></div>
    <div [class.isredbox]="!isRed"></div>
    <input type="checkbox" [(ngModel)]="isRed"/>
    <div [class]="blue"></div>
    <div [style.backgroundColor]="isYellow? 'yellow' : 'blue'"></div>
    <div [style.background-color]="!isYellow ? 'yellow' : 'blue'"></div>
    <input type="checkbox" [(ngModel)]="isYellow"/>`,
  styles: [`
    div {
      width: 50px;
      height: 50px;
      border: 1px solid #ccc
    }

    .isredbox {
      background-color: red;
    }

    .isbluebox {
      background-color: blue;
    }

  `]
})
export class AppComponent {
  title = "Binding2";
  isRed = false;
  blue = "isbluebox";
  isYellow = false;
}
