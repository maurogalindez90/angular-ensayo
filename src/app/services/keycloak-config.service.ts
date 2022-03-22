import { KeycloakService } from "keycloak-angular";

function initializeKeycloak(keycloak: KeycloakService) {
    return () =>
        keycloak.init({
            config: {
            url: 'http://localhost:8080',
            realm: 'angular-web',
            clientId: 'angular-web-client'
            },
            initOptions: {
            onLoad: 'login-required',
            flow : 'implicit',
        },
    loadUserProfileAtStartUp: true
    });
}

export {initializeKeycloak}
