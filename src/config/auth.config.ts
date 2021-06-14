import { AuthConfig } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

export const authConfig: AuthConfig = {
    issuer: environment.keycloak.issuer,
    redirectUri: environment.keycloak.redirectUri,
    clientId: environment.keycloak.clientId,
    responseType: environment.keycloak.responseType,
    scope: environment.keycloak.scope,
    requireHttps: environment.keycloak.requireHttps,
    showDebugInformation: environment.keycloak.showDebugInformation,
    disableAtHashCheck: environment.keycloak.disableAtHashCheck
};

export class OAuthModuleConfig {
    resourceServer: OAuthResourceServerConfig = {sendAccessToken: false};
}

export class OAuthResourceServerConfig {
    allowedUrls?: Array<string>;
    sendAccessToken = true;
    customUrlValidation?: (url: string) => boolean;
}