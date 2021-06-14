# How to secure an Angular App using THX-i IDP?

# Description

This is a sample Angular application that demostrates integration with THX-i IDP alas Keycloak. We are using angular-oauth2-oidc library for the keycloak integration with Angular. Make sure you run the Keycloak server along with your application to test keycloak on your local machine. We need to use APP_INITIALIZER to check the authentication before bootstrapping the main app. The project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.22.

# Prequsities:
* Keycloak
* npm
* angular-oauth2-oidc 

# Steps

* Update Environment file with relevant THX-i IDP configurations:

[environment.ts](https://gitlab.com/thxi/core/blob/feature/issue-2424-1/research/storybook-keycloak-auth/Angular-Keycloak-Integration/src/environments/environment.ts)

* Install npm 

```
npm install
```

* Run the application

```
npm start
```
Navigate to `http://${APPLICATION-URL}/`. You should get THX-i IDP login page. If you have correct credentials then you can access the application. The app will automatically reload if you change any of the source files.

# References:
https://medium.com/bb-tutorials-and-thoughts/how-to-integrate-keycloak-with-angular-for-sso-authentication-f68cf584555a                  
https://www.npmjs.com/package/angular-oauth2-oidc                                     
