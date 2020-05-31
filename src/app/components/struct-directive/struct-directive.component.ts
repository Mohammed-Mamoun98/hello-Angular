import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-struct-directive",
  templateUrl: "./struct-directive.component.html",
  styleUrls: ["./struct-directive.component.scss"],
})
export class StructDirectiveComponent implements OnInit {
  msgs: string[] = ["hello", "world", "!"];
  show: boolean = true;
  value: string = "";
  type: string = "";
  constructor() {}
  ngOnInit() {}
  handleInput(e) {
    if (e.keyCode === 13) {
      // alert("submit");
      switch (this.value) {
        case "1":
          this.type = "success";
          break;
        case "2":
          this.type = "wrong";
          break;
        default:
          this.type = "";
      }
      this.value = "";
    }
  }
  toggle() {
    this.show = !this.show;
  }
}
