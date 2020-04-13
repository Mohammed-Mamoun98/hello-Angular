import { Component } from "@angular/core";
import { Human } from "./components/io/io.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "new-app";
  state: string = "positive";
  counter: number = 0;
  human: Human = {
    name: "mohammed",
    age: 20,
  };

  handleBtn(btnType: number) {
    console.log(btnType);

    btnType >= 0 ? (this.state = "positive") : (this.state = "negative");
  }
  handleGrand(str: string) {
    console.log(str);
  }
  handleEvt(e) {
    console.log("hello from event");
  }
}
