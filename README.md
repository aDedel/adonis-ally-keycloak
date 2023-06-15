# Install Keycloak in Adonis

- Run `node ace configure <package-name>`. The configure command needs the package name and not the package path.
- Inform typescript about your driver by defining a mapping inside the `contracts/ally.ts` file.

  ```ts
  import { KeycloakDriverConfig, KeycloakDriver } from '@dedel.alex/ally-keycloak/build/standalone'

  declare module '@ioc:Adonis/Addons/Ally' {
    interface SocialProviders {
      keycloak: {
        config: KeycloakDriverConfig
        implementation: KeycloakDriver
      }
    }
  }
  ```

- Follow the Adonis official process to add Social authentication: https://docs.adonisjs.com/guides/auth/social

- Define the config inside the `config/ally.ts` file as follows:

  ```ts
  import Env from '@ioc:Adonis/Core/Env'

  const allyConfig = {
    /*
    |--------------------------------------------------------------------------
    | Keycloak driver
    |--------------------------------------------------------------------------
    */
    keycloak: {
      driver: 'keycloak',
      keycloakUrl: 'http://localhost:8080/realms/{realm}/protocol/openid-connect/{action}',
      realm: Env.get('KEYCLOAK_REALM'),
      clientId: Env.get('KEYCLOAK_CLIENT_ID'),
      clientSecret: Env.get('KEYCLOAK_CLIENT_SECRET'),
      callbackUrl: 'http://localhost:3333/keycloak/callback',
    },
  }
  ```

# Github project

https://github.com/aDedel/adonis-ally-keycloak
