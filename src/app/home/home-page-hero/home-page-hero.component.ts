import {Component, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-home-page-hero',
  templateUrl: './home-page-hero.component.html',
  styleUrls: ['./home-page-hero.component.scss'],
  imports: [
    CommonModule,
  ]
})
export class HomePageHeroComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
