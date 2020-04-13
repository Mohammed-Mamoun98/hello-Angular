import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";

export interface Human {
  name: string;
  age: number;
}

@Component({
  selector: "app-io",
  templateUrl: "./io.component.html",
  styleUrls: ["./io.component.scss"],
})
export class IoComponent implements OnInit {
  //to dispatch an action from child to parent you have to pass it like an output
  //in this case we passed an eventListener

  @Output() counterChange: EventEmitter<number> = new EventEmitter<number>();
  @Output() event: EventEmitter<any> = new EventEmitter<any>();
  //to acces the data fronm parent to child!
  //when you pass a valur to child compoent from parent
  //you can acces it by interpolation in child
  @Input() prop: number;
  @Input() name: string;
  @Input() counter: number;
  @Input() human: Human;

  constructor() {}

  ngOnInit() {}

  handleEvent() {
    this.event.emit();
  }

  handleButton() {
    this.counterChange.emit(this.counter);
  }

  dec() {
    this.counter--;
    this.handleButton();
  }

  inc() {
    this.counter++;
    this.handleButton();
  }
}
