import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {tap} from "rxjs";

export interface NewEmailData {
  sender: string;
  from: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  http = inject(HttpClient);

  constructor() { }

  sendEmail(data: NewEmailData) {
    return this.http.post(`${environment.baseApiUrl}/api/send-email`, data);
  }

}
