import { Component, OnInit } from '@angular/core';
import { MailerService, IMessage } from './mailer.service';

@Component({
  selector: 'app-contact',
  templateUrl: '../view/contact.component.html'
})
export class ContactComponent implements OnInit {

  title = 'Angular PHP Email Example!';
  message: IMessage = {};

  constructor(private appService: MailerService) { }

  ngOnInit() {
  }
  sendEmail(message: IMessage) {

    this.appService.sendEmail(message).subscribe(res => {
      console.log('AppComponent Success', res);
      alert('Message sent successfully')
    }, error => {
      console.log('AppComponent Error', error);
    })
  }
}