import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from "./home/home.page";
import {ApplicationsPage} from "./applications/applications.page";
import {AliasBridgePage} from "./applications/pages/alias-bridge/alias-bridge.page";
import {ProductMarketingPageComponent} from "./layout/product-marketing-page/product-marketing-page.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'apps',
    component: ApplicationsPage,
    children: [
      {
        path: 'alias-bridge',
        component: ProductMarketingPageComponent,
        data: {
          appName: 'AliasBridge',
          appSubtitle: 'Simple, Cross-Platform Alias Management',
          slogan: 'Stop Juggling Config Files. Master Your Terminal Aliases with AliasBridge.',
          subHeadline: 'Tired of editing .zshrc or .bashrc? Forgetting complex commands? AliasBridge provides a simple, intuitive GUI to create, view, organize, and manage your command-line shortcuts across macOS, Windows (Git Bash/WSL), and Linux.',
          markdownSrc: 'assets/content/alias-bridge.md',
          downloadLinks: {
            mac: 'https://github.com/christopher-harris/alias-bridge/releases/tag/v1.0.0',
            windows: 'YOUR_ALIASBRIDGE_WIN_URL',
            linux: 'YOUR_ALIASBRIDGE_LINUX_URL',
          },
          currentVersion: '0.1.0',
          showCodeSigningNote: true
        }
      }
    ]
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
