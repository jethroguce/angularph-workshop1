export class TodoModel {
  name: string;
  description: string;
  isDone: boolean = false;
  datecreated: Date = new Date();
}