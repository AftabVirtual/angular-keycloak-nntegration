export const environment = {
  production: false,
  envName: 'local',
  keycloak: {
    issuer: 'http://${KEYCLOAK-BASE-URL}/auth/realms/tasks',
    redirectUri: 'http://${APPLICATION-URL}/',
    clientId: 'thxi-client',
    responseType: 'code',
    scope: 'openid profile email',
    requireHttps: false,
    showDebugInformation: true,
    disableAtHashCheck: true
  }
};