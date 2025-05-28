import {Component, inject, isDevMode, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {ActivatedRoute, Params, RouterModule} from "@angular/router";
import {FirebaseService} from "../../../shared/services/firebase.service";
import {signInWithRedirect, GithubAuthProvider, getRedirectResult, signInWithPopup, Auth, GoogleAuthProvider, UserCredential, OAuthProvider} from "firebase/auth";

@Component({
  selector: 'app-alias-bridge-auth',
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl: './alias-bridge-auth.page.html',
  styleUrl: './alias-bridge-auth.page.scss'
})
export class AliasBridgeAuthPage implements OnInit {
  route = inject(ActivatedRoute);
  firebaseService = inject(FirebaseService);

  isDevMode = isDevMode();

  ngOnInit(): void {
    const auth = this.firebaseService.auth;

    getRedirectResult(auth)
      .then(async (result: UserCredential | null) => {
        if (result?.user) {
          const token = await result.user.getIdToken();
          window.location.href = `aliasbridge://auth?token=${token}`;
        } else {
          this.route.queryParams.subscribe((params: Params) => {
            const providerName = params['provider'];
            if (providerName) {
              const provider = this.getProviderInstance(providerName);
              if (provider) {
                this.signIn(auth, provider);
              } else {
                console.error(`Unsupported provider: ${providerName}`);
              }
            }
          });
        }
      })
      .catch((error) => {
        console.error('Redirect login error:', error);
      });
  }

  private signIn(auth: Auth, provider: GithubAuthProvider | GoogleAuthProvider | OAuthProvider): void {
    if (this.isDevMode) {
      signInWithPopup(auth, provider)
        .then((result) => result.user?.getIdToken())
        .then((idToken) => {
          if (idToken) {
            window.location.href = `aliasbridge://auth?token=${idToken}`;
          }
        })
        .catch((err) => console.error('Popup login error:', err));
    } else {
      signInWithRedirect(auth, provider);
    }
  }

  private getProviderInstance(provider: string) {
    switch (provider.toLowerCase()) {
      case 'github':
        return new GithubAuthProvider();
      case 'google':
        return new GoogleAuthProvider();
      // add more here as needed, like:
      // case 'microsoft':
      //   return new OAuthProvider('microsoft.com');
      default:
        return null;
    }
  }
}
