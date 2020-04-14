import { Todo } from "./../todoapp.component";
import { Input, Output, EventEmitter } from "@angular/core";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-todos",
  templateUrl: "./todos.component.html",
  styleUrls: ["./todos.component.scss"],
})
export class TodosComponent implements OnInit {
  @Input() todos: Todo[];
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  handleDelete(id: number) {
    this.onDelete.emit(id);
  }

  ngOnInit() {}
}
