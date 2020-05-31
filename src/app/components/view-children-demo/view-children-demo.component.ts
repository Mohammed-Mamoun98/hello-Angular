import { MsgComponentComponent } from "./msg-component/msg-component.component";
import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  ViewChildren,
  QueryList,
} from "@angular/core";

@Component({
  selector: "app-view-children-demo",
  templateUrl: "./view-children-demo.component.html",
  styleUrls: ["./view-children-demo.component.scss"],
})
export class ViewChildrenDemoComponent implements OnInit, AfterViewInit {
  @ViewChild(MsgComponentComponent, { static: false })
  child!: MsgComponentComponent;
  @ViewChildren(MsgComponentComponent) children: QueryList<
    MsgComponentComponent
  >;

  //ComponentDidMount Like
  ngAfterViewInit() {
    // child is set
    // console.log(this.child.title);
    this.child.title = "this title is overriden from the parent";
    //override all children
    this.children
      .toArray()
      .map((value: MsgComponentComponent) => (value.title = "overridern"));
  }

  msgs: string[] = ["msg 1", "msg 2", "msg3"];

  constructor() {}

  ngOnInit() {}
}
