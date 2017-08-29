import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Resolve } from '@angular/router';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Headers} from '@angular/http';

export interface IMessage {
  name?: string,
  email?: string,
  message?: string
}


@Injectable()
export class MailerService {

  private emailUrl = 'http://localhost/angular2/applications/pg-latest/code/src/assets/mailer.php';


  constructor(private http: Http) { }

sendEmail(message: IMessage): Observable<IMessage> | any {
  const body = new URLSearchParams();
  Object.keys(message).forEach(key => {
    body.set(key, message[key]);
	})
		const headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
		//alert('1'+JSON.stringify(message));

    return this.http.post(this.emailUrl, JSON.stringify(message), {headers})
    //return this.http.post(this.emailUrl, body.toString(), {headers})
      .map(response => {

        console.log('Sending email was successfull', response);
        return response;
      })
      .catch(error => {
            alert('0');
        console.log('Sending email got error', error);
        return Observable.throw(error)
      })
  }
}
