# Install Keycloak in Adonis

- Run `node ace configure <package-name>`. The configure command needs the package name and not the package path.
- Inform typescript about your driver by defining a mapping inside the `contracts/ally.ts` file.

  ```ts
  import { KeycloakConfig, Keycloak } from 'ally-custom-driver/build/standalone'

  interface SocialProviders {
    keycloak: {
      config: KeycloakConfig
      implementation: Keycloak
    }
  }
  ```

- Define the config inside the `config/ally.ts` file.

# Github project

https://github.com/aDedel/adonis-ally-keycloak
