import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-property-bindings",
  templateUrl: "./property-bindings.component.html",
  styleUrls: ["./property-bindings.component.scss"],
})
export class PropertyBindingsComponent implements OnInit {
  message = "this is a property !";
  constructor() {}

  ngOnInit() {}
}
