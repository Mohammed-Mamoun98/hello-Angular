import { Component, OnInit } from "@angular/core";
import { Observable, of, timer, interval } from "rxjs";
import { map } from "rxjs/operators";

// import { of } from "rxjs/operator";

@Component({
  selector: "app-rx-playground",
  templateUrl: "./rx-playground.component.html",
  styleUrls: ["./rx-playground.component.scss"],
})
export class RxPlaygroundComponent implements OnInit {
  one: Observable<any> = of(1, 2, 3);

  constructor() {}

  fireClick(e) {
    // const obs = interval(1500).subscribe()
    this.one
      .pipe(
        map((v) => v * v),
        map((v) => v * v)
      )
      .subscribe((v) => console.log(v));
  }

  ngOnInit() {
    // const customObservable: Observable<any> = Observable.create((observer) => {
    //   observer.next("hello");
    //   observer.next("world!");
    // });
    // customObservable.subscribe((value) => console.log(value));

    this.one
      .pipe(map((value) => value * value))
      .subscribe((value) => console.log(value));
  }
}
