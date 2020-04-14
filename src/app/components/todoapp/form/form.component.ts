import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  textInput: string;
  @Output() submitListener: EventEmitter<string> = new EventEmitter<string>();

  handleSubmit() {
    this.submitListener.emit(this.textInput);
    this.textInput = "";
  }

  constructor() {}

  ngOnInit() {}
}
