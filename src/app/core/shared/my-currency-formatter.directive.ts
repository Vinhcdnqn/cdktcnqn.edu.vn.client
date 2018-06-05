import { Directive, HostListener, ElementRef, OnInit, NgModule } from "@angular/core";
import { formatNumberPipe } from "./formatNumber.pipe";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@Directive({ selector: "[myCurrencyFormatter]" })
export class MyCurrencyFormatterDirective implements OnInit {

  private el: any;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: formatNumberPipe
  ) {
    this.el = this.elementRef.nativeElement;

  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = this.currencyPipe.parse(value); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.currencyPipe.transform(value);
  }

}

@NgModule({
  imports: [
      FormsModule      
    ],
  declarations: [MyCurrencyFormatterDirective],
  exports: [MyCurrencyFormatterDirective]
})
export class MyCurrencyFormatterModule { }