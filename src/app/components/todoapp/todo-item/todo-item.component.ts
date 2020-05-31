import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  DoCheck,
  SimpleChanges,
} from "@angular/core";

@Component({
  selector: "app-todo-item",
  templateUrl: "./todo-item.component.html",
  styleUrls: ["./todo-item.component.scss"],
})
export class TodoItemComponent implements OnInit, OnChanges, DoCheck {
  @Input() title: string;
  @Input() id: number;
  @Output() onDelete: EventEmitter<number> = new EventEmitter<number>();

  handleDelete() {
    this.onDelete.emit(this.id);
  }

  constructor() {
    console.log("message has been created", this.title);
  }

  ngOnInit() {
    console.log("message has been created", this.title);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log("message has been created", this.title);
    for (let prop in changes)
      console.log(
        `property name : ${prop}, currentValue : ${changes[prop].currentValue}, prevValue : ${changes[prop].previousValue}`
      );
  }

  ngDoCheck() {}
}
