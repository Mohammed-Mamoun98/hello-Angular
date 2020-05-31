import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  AfterViewInit,
} from "@angular/core";
import * as jsPDF from "jspdf";

@Component({
  selector: "app-html-to-pdf",
  templateUrl: "./html-to-pdf.component.html",
  styleUrls: ["./html-to-pdf.component.scss"],
})
export class HtmlToPdfComponent implements OnInit, AfterViewInit {
  @ViewChild("print", { static: false }) toPrint: ElementRef;

  ngAfterViewInit() {
    this.toPrint.nativeElement.value = "";
  }

  public downloadPdf() {
    let doc = new jsPDF();
    let specialElementHanlders = {
      "#editor": function (element, renderer) {
        return true;
      },
    };

    let content = this.toPrint.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      width: 190,
      elementHandlers: specialElementHanlders,
    });

    doc.save("test.pdf");
  }
  ngOnInit() {}
}
