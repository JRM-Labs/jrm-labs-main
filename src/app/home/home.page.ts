import { Component } from '@angular/core';
import {ContactFormComponent} from "../contact-form/contact-form.component";
import {HomePageServicesComponent} from "./home-page-services/home-page-services.component";
import {HomePageHeroComponent} from "./home-page-hero/home-page-hero.component";
import {HomePageApplicationsComponent} from "./home-page-applications/home-page-applications.component";
import {HomeAboutSectionComponent} from "./home-about-section/home-about-section.component";

@Component({
  selector: 'app-home',
  imports: [
    ContactFormComponent,
    HomePageServicesComponent,
    HomePageHeroComponent,
    HomePageApplicationsComponent,
    HomeAboutSectionComponent,
  ],
  templateUrl: './home.page.html',
  styleUrl: './home.page.scss'
})
export class HomePage {

}
