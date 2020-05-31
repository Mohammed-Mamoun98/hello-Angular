import { Component, OnInit, ViewEncapsulation, Input } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.scss"],
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class UserComponent implements OnInit {
  @Input() id: number;

  constructor() {}

  ngOnInit() {}
}
