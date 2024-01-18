// tslint:disable-next-line:no-namespace
declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      /**
       * Log in the user with the given attributes, or create a new user and then log them in.
       *
       * @example
       * cy.login()
       * cy.login({ id: 1 })
       * cy.login({ id: 1 }, '/')
       */
      login(attributes?: object, linkToVisit?: string): Chainable<Subject>;

      /**
       * Log out the current user.
       *
       * @example
       * cy.logout()
       */
      logout(): Chainable<Subject>;

      /**
       * Fetch the currently authenticated user.
       *
       * @example
       * cy.currentUser()
       */
      currentUser(): Chainable<object>;

      /**
       * Get session data
       *
       * @param key
       *
       * @return void
       */
      getSessionStorage(key: string): Chainable<void>;

      /**
       * Set session data
       *
       * @param key
       * @param value
       *
       * @return void
       */
      setSessionStorage(key: string, value: string): Chainable<void>;
    }
  }
}
