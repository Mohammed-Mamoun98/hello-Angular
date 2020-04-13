import { EventEmitter } from "@angular/core";
import { Component, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-grandchild",
  templateUrl: "./grandchild.component.html",
  styleUrls: ["./grandchild.component.scss"],
})
export class GrandchildComponent implements OnInit {
  @Output() evt: EventEmitter<any> = new EventEmitter<any>();

  handleClick() {
    this.evt.emit("hello");
    console.log("evt");
  }
  constructor() {}

  ngOnInit() {}
}
