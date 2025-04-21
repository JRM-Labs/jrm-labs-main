import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GraphQLModule} from './graphql.module';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {ContactFormComponent} from "./contact-form/contact-form.component";
import {FooterComponent} from "./footer/footer.component";
import {provideMarkdown} from "ngx-markdown";

@NgModule({
  declarations: [
    AppComponent,
  ],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GraphQLModule,
    ContactFormComponent,
    FooterComponent,
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
    provideMarkdown()
  ]
})
export class AppModule {
}
