import { Injectable } from '@angular/core';
import { OAuthService as OAuthServiceGoogle, AuthConfig } from "angular-oauth2-oidc"






const config: AuthConfig = {
  issuer: "http://accounts.google.com",
  strictDiscoveryDocumentValidation: false,
  redirectUri: window.location.origin,
  clientId: "152151821718-0rjo8c5dlui7l1kc8fcrao0i2nl06mn9.apps.googleusercontent.com",
  scope: "openid profile email"
}

@Injectable({
  providedIn: 'root'
})

export class OAuthService {

  constructor(private readonly oAuthService: OAuthServiceGoogle) {
    oAuthService.configure(config)
    oAuthService.loadDiscoveryDocument().then(()=>{
      oAuthService.tryLoginImplicitFlow().then(()=>{
        if(!oAuthService.hasValidAccessToken()){
          oAuthService.initCodeFlow()
        }else{
          oAuthService.loadUserProfile().then((userProfile)=>{
            console.log(JSON.stringify(userProfile))
          })
        }
      })

    })
   }
}
