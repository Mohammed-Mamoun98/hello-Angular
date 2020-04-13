import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-bindungs",
  templateUrl: "./bindungs.component.html",
  styleUrls: ["./bindungs.component.scss"],
})
export class BindungsComponent implements OnInit {
  message = `this is a message!`;
  constructor() {}

  ngOnInit() {}
}
