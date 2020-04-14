import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-attribute-binding",
  templateUrl: "./attribute-binding.component.html",
  styleUrls: ["./attribute-binding.component.scss"],
})
export class AttributeBindingComponent implements OnInit {
  length: number = 1;
  clickable: boolean = false;

  toggleClick() {
    this.clickable = !this.clickable;
  }

  constructor() {}

  ngOnInit() {}
}
