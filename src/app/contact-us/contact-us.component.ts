import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  submitted: boolean = false;
  fname: string;
  subjectText: string;
  messageText: string;
  emailId: string;
  showMessageBox: boolean;
  submitMessage: string;
  private fields: string;

  onSubmit() {
    this.submitted = true;
    this.showMessageBox = true;
  }

  hideMessagebox() {
    this.showMessageBox = false;
  }
  constructor() {
    this.submitMessage = "Message submitted successfully";
  }
}
