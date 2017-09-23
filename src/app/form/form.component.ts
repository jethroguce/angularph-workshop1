import { Component,Output, EventEmitter } from '@angular/core';
import { TodoModel } from './../todo/todo.model';

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html"
})
export class FormComponent{

    @Output() saveForm: EventEmitter<TodoModel> = new EventEmitter<TodoModel>();


    todo: TodoModel = new TodoModel();

    save(todo: TodoModel){
      this.saveForm.emit(todo);
    }

}