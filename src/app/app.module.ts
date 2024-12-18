import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageHeroComponent} from './home-page-hero/home-page-hero.component';
import {GraphQLModule} from './graphql.module';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {HomePageServicesComponent} from './home-page-services/home-page-services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageHeroComponent,
    HomePageServicesComponent
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi())
  ]
})
export class AppModule {
}
