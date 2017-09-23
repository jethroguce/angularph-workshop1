import { Component } from '@angular/core';
import { TodoModel } from './todo/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string = 'Todo 1';
  todo : TodoModel = new TodoModel();
  todoList: Array<TodoModel> = new Array<TodoModel>();

  save(todo: TodoModel): void {
    this.todoList.push(Object.assign({}, todo));
  }
}
