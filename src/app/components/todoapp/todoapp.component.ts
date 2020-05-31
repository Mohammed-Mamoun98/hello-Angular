import { Component, OnInit } from "@angular/core";

export interface Todo {
  title: string;
  completed: boolean;
  id: number;
}

@Component({
  selector: "app-todoapp",
  templateUrl: "./todoapp.component.html",
  styleUrls: ["./todoapp.component.scss"],
})
export class TodoappComponent implements OnInit {
  todos: Todo[] = [];
  id: number = 0;

  makeChange() {
    if (this.todos.length > 0)
      this.todos[0].title = "this title has been overriden!";
  }
  onDelete(id: number) {
    this.todos = this.todos.filter((item: Todo) => item.id !== id);
  }

  onSubmit(input) {
    if (!!input) {
      this.todos.push({ title: input, completed: false, id: this.id++ });
    }
  }

  constructor() {}

  ngOnInit() {}
}
