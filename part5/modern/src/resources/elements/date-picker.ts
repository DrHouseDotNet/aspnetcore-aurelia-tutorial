import {inject, customElement, bindable} from "aurelia-framework";
import "bootstrap-datepicker";
import moment from "moment";

@customElement("date-picker")
@inject(Element)
export class DatePicker {
@bindable value;
@bindable format = "mm/dd/yyyy";

  constructor( private element) {
  }

  private updateAndShowDatePicker() {
    $(".datepicker").datepicker("update", this.value);
    $(".datepicker").datepicker("show");
  }
  dateClicked() {
    this.updateAndShowDatePicker();
  }
  attached() {
    console.log("attached");
    $(this.element).find(".datepicker")
      .datepicker({
        format: this.format,
        startDate: "01/01/1900",
        autoclose: true,
        todayBtn: true,
        showOnFocus: false
      })
      .on("click", (e) =>{
        this.updateAndShowDatePicker();
      })
      .on("changeDate", (e) => {
        this.value = moment(e.date).format("MM/DD/YYYY");
      });
  }
}