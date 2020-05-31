import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-custom-struct-directive",
  templateUrl: "./custom-struct-directive.component.html",
  styleUrls: ["./custom-struct-directive.component.scss"],
})
export class CustomStructDirectiveComponent implements OnInit {
  show: boolean = false;

  constructor() {}

  ngOnInit() {}

  toggle() {
    this.show = !this.show;
  }
}
