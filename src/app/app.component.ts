import {Component, OnInit} from '@angular/core';
import {RouterModule, RouterOutlet} from "@angular/router";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-root',
  imports: [
    RouterModule,
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jrm';

  ngOnInit() {
  }
}
