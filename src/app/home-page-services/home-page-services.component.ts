import { Component, OnInit } from '@angular/core';
import {ServicesGQL} from "../../graphql/generated";
import {map, Observable} from "rxjs";

@Component({
    selector: 'app-home-page-services',
    templateUrl: './home-page-services.component.html',
    styleUrls: ['./home-page-services.component.scss'],
    standalone: false
})
export class HomePageServicesComponent implements OnInit {
  services$: Observable<any> = this.servicesGQL.watch().valueChanges.pipe(
    map((response) => response.data.services)
  );

  constructor(private servicesGQL: ServicesGQL) { }

  ngOnInit(): void {
    this.services$.subscribe(x => console.log(x));
  }

}
