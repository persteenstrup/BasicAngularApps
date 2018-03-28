import { Component, OnInit } from '@angular/core';
import { Email } from './email';

@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
  emails: Array<object>
  constructor() {
    this.emails = []
    this.emails.push(new Email("john",true,"hey","call me"))
   }
  ngOnInit() {
  }

}
