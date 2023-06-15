The package has been configured successfully!

First, follow the Adonis official process to add Social authentication: https://docs.adonisjs.com/guides/auth/social

Then, make sure to first define the mapping inside the `contracts/ally.ts` file as follows.

```ts
import { KeycloakDriver, KeycloakDriverConfig } from '@dedel.alex/ally-keycloak/build/standalone'

declare module '@ioc:Adonis/Addons/Ally' {
  interface SocialProviders {
    // ... other mappings
    keycloak: {
      config: KeycloakDriverConfig
      implementation: KeycloakDriver
    }
  }
}
```
