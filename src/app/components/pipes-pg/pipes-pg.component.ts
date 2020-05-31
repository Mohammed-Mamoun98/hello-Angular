import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-pipes-pg",
  templateUrl: "./pipes-pg.component.html",
  styleUrls: ["./pipes-pg.component.scss"],
})
export class PipesPGComponent implements OnInit {
  date: string;
  constructor() {}

  ngOnInit() {
    this.date = new Date().toDateString();
  }
}
