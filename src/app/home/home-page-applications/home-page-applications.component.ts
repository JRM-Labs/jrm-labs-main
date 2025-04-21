import { Component } from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-home-page-applications',
  imports: [CommonModule, RouterModule],
  templateUrl: './home-page-applications.component.html',
  styleUrl: './home-page-applications.component.scss'
})
export class HomePageApplicationsComponent {
  applications = [
    {
      title: 'AliasBridge',
      description: 'Sync your shell aliases. Simplify your workflow.\n' +
        'Alias Bridge keeps your terminal commands in sync, wherever you go.',
      image: 'assets/images/application-images/alias-bridge-3d-render.png',
      link: '/apps/alias-bridge',
      techStack: ['Angular', 'Electron', 'Tailwind CSS', 'PrimeNG', 'NodeJS', 'Firestore']
    },
    // {
    //   title: 'Linzly',
    //   description: 'A personal resume and portfolio builder for modern professionals.',
    //   image: 'assets/img/linzly-preview.png',
    //   link: '/apps/linzly'
    // },
    // {
    //   title: 'Worship Song Bank',
    //   description: 'A worship leader’s toolkit to manage songs, setlists, and scripture themes.',
    //   image: 'assets/img/songbank-preview.png',
    //   link: '/apps/song-bank'
    // },
    // {
    //   title: 'Encompass',
    //   description: 'A dynamic form builder with smart layout and field grouping.',
    //   image: 'assets/img/encompass-preview.png',
    //   link: '/apps/encompass'
    // }
  ];
}
