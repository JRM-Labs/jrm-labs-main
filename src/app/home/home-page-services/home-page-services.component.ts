import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {ServicesGQL} from "../../../graphql/generated";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home-page-services',
  templateUrl: './home-page-services.component.html',
  styleUrls: ['./home-page-services.component.scss'],
  imports: [
    CommonModule
  ]
})
export class HomePageServicesComponent implements OnInit {
  // services$: Observable<any> = this.servicesGQL.watch().valueChanges.pipe(
  //   map((response) => response.data.services)
  // );

  services = [
    { Title: 'Custom Web Application Development', Icon: 'bi-window', Description: 'We build scalable, fast, and maintainable web apps tailored to your needs.' },
    { Title: 'Mobile-Friendly Design', Icon: 'bi-phone', Description: 'Responsive design that looks great on any device.' },
    { Title: 'API Integration', Icon: 'bi-plug', Description: 'We connect your app to the tools and services you already use.' },
    { Title: 'Cloud Hosting & Maintenance', Icon: 'bi-cloud-upload', Description: 'We deploy and monitor your app with confidence.' },
    { Title: 'Legacy Application Updating', Icon: 'bi-arrow-repeat', Description: 'Modernize and future-proof old tech stacks.' },
  ];

  constructor() {
  }

  ngOnInit(): void {
    // this.services$.subscribe(x => console.log(x));
  }

}
