import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-attr-directive",
  templateUrl: "./attr-directive.component.html",
  styleUrls: ["./attr-directive.component.scss"],
})
export class AttrDirectiveComponent implements OnInit {
  state: boolean = false;
  constructor() {}

  ngOnInit() {}

  toggle() {
    this.state = !this.state;
  }
}
