import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
})
export class TodoItemComponent implements OnInit {
  @Input() title: string;
  @Input() id: number;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  handleDelete() {
    this.onDelete.emit(this.id);
  }

  constructor() {}

  ngOnInit() {}
}
