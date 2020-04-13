import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-event-bindings",
  templateUrl: "./event-bindings.component.html",
  styleUrls: ["./event-bindings.component.scss"],
})
export class EventBindingsComponent implements OnInit {
  msg = "random message!";
  constructor() {}
  onClick() {
    alert("btn is clicked!");
  }
  onKeyUp(e) {
    // alert("key up is clicked!");
    console.log(e);
    if (e.code === "Enter") alert("Enter was clicked! ");
    else {
      console.log(e.code);
    }
  }

  ngOnInit() {}
}
