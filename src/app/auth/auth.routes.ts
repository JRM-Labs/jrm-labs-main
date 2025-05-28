import {Routes} from "@angular/router";
import {AliasBridgeAuthPage} from "./auth-pages/alias-bridge-auth/alias-bridge-auth.page";
import {AuthLayoutComponent} from "./auth-layout/auth-layout.component";

export const AUTH_ROUTES: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      {path: 'alias-bridge-authentication', component: AliasBridgeAuthPage}
    ]
  },
];
