import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Renderer2,
  Input,
  OnChanges,
  SimpleChanges,
} from "@angular/core";

@Directive({
  selector: "[appChangeCase]",
})
export class ChangeCaseDirective implements OnInit, OnChanges {
  @Input() case: string;

  @HostListener("change") onblur() {
    //first way to override content of element by element reference
    // this.ElemRef.nativeElement.value = this.ElemRef.nativeElement.value.toUpperCase();

    //second way to do that
    let newValue: string =
      this.case === "upper"
        ? this.ElemRef.nativeElement.value.toUpperCase()
        : this.ElemRef.nativeElement.value.toLowerCase();
    this.renderer.setProperty(this.ElemRef.nativeElement, "value", newValue);
  }
  constructor(private ElemRef: ElementRef, private renderer: Renderer2) {
    console.log("directive is called!");
  }

  ngOnInit() {
    console.log(this.ElemRef.nativeElement.value);
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }
}
