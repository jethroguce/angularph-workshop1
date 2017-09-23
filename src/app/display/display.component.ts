import { Component, Input } from '@angular/core';
import { TodoModel } from './../todo/todo.model';

@Component({
  selector: "app-display",
  templateUrl: "./display.component.html"
})
export class DisplayComponent{
  @Input() value: Array<TodoModel> = new Array<TodoModel>();
  
}