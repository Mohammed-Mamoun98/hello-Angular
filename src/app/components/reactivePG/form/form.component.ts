import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";

const ELEMENT_DATA = [
  { position: 1, name: "Hydrogen", weight: 1.0079, symbol: "H" },
  { position: 2, name: "Helium", weight: 4.0026, symbol: "He" },
  // { position: 3, name: "Lithium", weight: 6.941, symbol: "Li" },
  // { position: 4, name: "Beryllium", weight: 9.0122, symbol: "Be" },
  // { position: 5, name: "Boron", weight: 10.811, symbol: "B" },
  // { position: 6, name: "Carbon", weight: 12.0107, symbol: "C" },
  // { position: 7, name: "Nitrogen", weight: 14.0067, symbol: "N" },
  // { position: 8, name: "Oxygen", weight: 15.9994, symbol: "O" },
  // { position: 9, name: "Fluorine", weight: 18.9984, symbol: "F" },
  // { position: 10, name: "Neon", weight: 20.1797, symbol: "Ne" },
];

@Component({
  selector: "reactive-app-form",
  templateUrl: "./form.component.html",
  styleUrls: ["./form.component.scss"],
})
export class FormComponent implements OnInit {
  myForm: FormGroup;
  ediableRow: FormGroup;
  displayedColumns: string[] = ["position", "name", "weight", "symbol"];
  dataSource = ELEMENT_DATA;
  items = [1, 2];
  keys: string[] = [];
  newForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  createFormGroup() {}

  ngOnInit() {
    const singleRowUnit = this.fb.group({
      price: "",
      unit: "",
    });
    this.newForm = this.fb.group({
      a: singleRowUnit,
      b: singleRowUnit,
    });

    this.ediableRow = this.fb.group({
      firstRow: singleRowUnit,
      secondRow: singleRowUnit,
    });
    this.myForm = this.fb.group({
      email: "initial Value",
    });
    this.keys = Object.keys(this.ediableRow.value);
  }
}
