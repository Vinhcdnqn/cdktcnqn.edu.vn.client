import { Pipe, PipeTransform, NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

const PADDING = "000000";

@Pipe({ name: "formatNumber" })
export class formatNumberPipe implements PipeTransform {

    private DECIMAL_SEPARATOR: string;
    private THOUSANDS_SEPARATOR: string;

    constructor() {
        this.DECIMAL_SEPARATOR = ",";
        this.THOUSANDS_SEPARATOR = " ";
    }

    transform(value: number | string, fractionSize: number = 0): string {
        let [integer, fraction = ""] = (value || "").toString()
            .split(this.DECIMAL_SEPARATOR);

        fraction = fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";

        integer = integer.replace(/\B(?=(\d{3})+(?!\d))/g, this.THOUSANDS_SEPARATOR);

        return integer + fraction;
    }

    parse(value: string, fractionSize: number = 0): string {
        let [integer, fraction = ""] = (value || "").split(this.DECIMAL_SEPARATOR);

        integer = integer.replace(new RegExp(this.THOUSANDS_SEPARATOR, "g"), "");

        fraction = parseInt(fraction, 10) > 0 && fractionSize > 0
            ? this.DECIMAL_SEPARATOR + (fraction + PADDING).substring(0, fractionSize)
            : "";

        return integer + fraction;
    }

}

@NgModule({
    imports: [
        FormsModule
      ],
    declarations: [formatNumberPipe],
    exports: [formatNumberPipe]
})
export class FormatNumberPipeModule { }