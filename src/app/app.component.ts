import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todo-list';
  constructor(){
    // setTimeout(() => {
    //   this.title = "Changed title";
    // }, 2000);
  }
}
