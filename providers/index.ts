import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class KeycloakProvider {
  constructor(protected app: ApplicationContract) {}

  public async boot() {
    const Ally = this.app.container.resolveBinding('Adonis/Addons/Ally')
    const { KeycloakDriver } = await import('../src/KeycloakDriver')

    Ally.extend('keycloak', (_, __, config, ctx) => {
      return new KeycloakDriver(ctx, config)
    })
  }
}
