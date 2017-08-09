import { Component, OnInit, ElementRef, Input, EventEmitter, Output } from '@angular/core';
import { MyDatePicker } from '../../../node_modules/mydatepicker/src/my-date-picker/my-date-picker.component'

@Component({
  selector: 'date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})

export class DatePickerComponent {
  private fromDatePickerOptions;
  private toDatePickerOptions;
  private fromDateLabel: string = "From date";
  private toDateLabel: string = "To date";
  private previousDate;

  @Output() selectedFromChanged = new EventEmitter();
  @Output() selectedToChanged = new EventEmitter();

  constructor(private element: ElementRef) {
    let currentDate = new Date();
    let previous = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, currentDate.getDate() - 1);
    this.previousDate = { year: previous.getFullYear(), month: previous.getMonth(), day: previous.getDate() };
  }

  ngOnInit() {
    this.fromDatePickerOptions = {
      dateFormat: 'yyyy-mm-dd',
      markCurrentDay: true,
      yearSelector: true,
      monthSelector: true,
      disableUntil: this.previousDate
    };
  }

  onFromDateChanged(event: any) {
    console.log(event);
    var selectedDate = event.date;
    this.toDatePickerOptions = {
      dateFormat: 'yyyy-mm-dd',
      markCurrentDay: true,
      yearSelector: true,
      monthSelector: true,
      disableUntil: {
        year: selectedDate.year,
        month: selectedDate.month,
        day: selectedDate.day
      }
    };

    this.selectedFromChanged.emit(selectedDate);
  }

  onToDateChanged(event: any) {
    console.log(event);
    var selectedDate = event.date;
    this.fromDatePickerOptions = {
      disableUntil: this.previousDate,
      disableSince: {
        year: selectedDate.year,
        month: selectedDate.month,
        day: selectedDate.day
      }
    };
    this.selectedToChanged.emit(selectedDate);
  }
}

