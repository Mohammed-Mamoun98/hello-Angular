import { Component, OnInit, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UserComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
