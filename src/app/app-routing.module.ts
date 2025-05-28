import {Routes} from '@angular/router';
import {HomePage} from "./home/home.page";
import {ApplicationsPage} from "./applications/applications.page";
import {ProductMarketingPageComponent} from "./layout/product-marketing-page/product-marketing-page.component";
import {MainSiteComponent} from "./layout/main-site/main-site.component";
import {AppSpndPage} from "./applications/pages/app-spnd/app-spnd.page";

export const routes: Routes = [
  {
    path: '',
    component: MainSiteComponent,
    children: [
      {
        path: 'home',
        component: HomePage
      },
      // {
      //   path: '**',
      //   redirectTo: '/home'
      // },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      }
    ]
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
          appSubtitle: 'Apple Receipt Tracking Made Easy',
          slogan: 'Know Where Your Apple Money Goes — Automatically.',
          subHeadline: 'AppSpnd gives families an effortless way to track Apple spending. Just forward your receipts and we’ll do the rest — breaking down purchases by family member, category, and time. No apps to connect, no manual entry. Just clarity.',
          markdownSrc: 'assets/content/alias-bridge.md',
          downloadLinks: {
            mac: 'https://github.com/christopher-harris/alias-bridge/releases/tag/v1.0.0',
            windows: 'YOUR_ALIASBRIDGE_WIN_URL',
            linux: 'YOUR_ALIASBRIDGE_LINUX_URL',
          },
          currentVersion: '0.1.0',
          showCodeSigningNote: true
        }
      },
      {
        path: 'appspnd',
        component: AppSpndPage
      }
      // {
      //   path: 'appspnd',
      //   component: ProductMarketingPageComponent,
      //   data: {
      //     appName: 'AppSpnd',
      //     appSubtitle: 'Simple, Cross-Platform Alias Management',
      //     slogan: 'Stop Juggling Config Files. Master Your Terminal Aliases with AliasBridge.',
      //     subHeadline: 'Tired of editing .zshrc or .bashrc? Forgetting complex commands? AliasBridge provides a simple, intuitive GUI to create, view, organize, and manage your command-line shortcuts across macOS, Windows (Git Bash/WSL), and Linux.',
      //     markdownSrc: 'assets/content/appspnd.md',
      //     downloadLinks: {
      //       mac: 'URL',
      //       windows: 'YOUR_ALIASBRIDGE_WIN_URL',
      //       linux: 'YOUR_ALIASBRIDGE_LINUX_URL',
      //     },
      //     currentVersion: '0.1.0',
      //     showCodeSigningNote: true
      //   }
      // }
    ]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(mod => mod.AUTH_ROUTES)
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];
