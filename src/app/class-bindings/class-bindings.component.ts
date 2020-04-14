import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-class-bindings",
  templateUrl: "./class-bindings.component.html",
  styleUrls: ["./class-bindings.component.scss"],
})
export class ClassBindingsComponent implements OnInit {
  ishighlight = false;

  toggleClass() {
    this.ishighlight = !this.ishighlight;
  }

  constructor() {}

  ngOnInit() {}
}
