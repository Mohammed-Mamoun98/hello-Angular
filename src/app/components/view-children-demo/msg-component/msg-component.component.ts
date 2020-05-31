import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-msg-component",
  templateUrl: "./msg-component.component.html",
  styleUrls: ["./msg-component.component.scss"],
})
export class MsgComponentComponent implements OnInit {
  @Input() title: string;
  constructor() {}

  ngOnInit() {}
}
