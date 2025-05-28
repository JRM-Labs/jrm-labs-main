import {Component} from '@angular/core';
import {FooterComponent} from "../../footer/footer.component";
import {RouterModule, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-main-site',
  imports: [
    RouterModule,
    FooterComponent
  ],
  templateUrl: './main-site.component.html',
  styleUrl: './main-site.component.scss'
})
export class MainSiteComponent {

}
