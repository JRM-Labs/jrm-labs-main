import {Component, OnInit} from '@angular/core';
import AOS from 'aos';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    standalone: false
})
export class AppComponent implements OnInit {
  title = 'jrm';

  ngOnInit() {
    AOS.init({
      once: true,
      duration: 800,
      easing: 'ease-in-out',
    });
  }
}
