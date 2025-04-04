import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomePage} from "./home/home.page";
import {ApplicationsPage} from "./applications/applications.page";

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'apps',
    component: ApplicationsPage
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
