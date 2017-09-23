import { Component, OnInit, Input } from '@angular/core';
import { TodoModel } from './todo.model';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  // @Input() todo: TodoModel;

  // constructor() { }

  // ngOnInit() {
  // }

  todoList: Array<TodoModel> = new Array<TodoModel>();

  getValue(todo: TodoModel){
    this.todoList.push(Object.assign({},todo));
  }

}
