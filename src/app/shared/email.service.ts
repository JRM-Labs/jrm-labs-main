import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {tap} from "rxjs";

export interface NewEmailData {
  name: string;
  email: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  http = inject(HttpClient);

  constructor() { }

  sendEmail(data: NewEmailData) {
    return this.http.post(`${environment.baseApiUrl}/send-email`, data);
  }

}
