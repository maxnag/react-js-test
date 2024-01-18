/// <reference types="cypress" />

// /**
//  * Create a new user and log them in.
//  *
//  * @param {Object} attributes
//  *
//  * @example cy.login();
//  *  cy.login({ name: 'JohnDoe' });
//  *  cy.login({ attributes: { name: 'JohnDoe' }, state: 'guest', load: ['comments] });
//  */
// Cypress.Commands.add('login', (attributes = {}, linkToVisit = '') => {
//   // Are we using the new object system.
//   let requestBody = attributes.attributes || attributes.state || attributes.load ? attributes : { attributes };
//
//   return cy
//     .then((token) => {
//       return cy.request({
//         method: 'POST',
//         url: '/__cypress__/login',
//         body: { ...requestBody, _token: token },
//         log: false,
//       });
//     })
//     .then((response) => {
//       Cypress.currentUser = response?.body;
//
//       cy.visit(linkToVisit);
//     });
// });
//
// /**
//  * Fetch the currently authenticated user object.
//  *
//  * @example cy.currentUser();
//  */
// Cypress.Commands.add('currentUser', () => {
//   return cy.then((token) => {
//     return cy
//       .request({
//         method: 'POST',
//         url: '/__cypress__/current-user',
//         body: { _token: token },
//         log: false,
//       })
//       .then((response) => {
//         if (!response.body) {
//           cy.log('No authenticated user found.');
//         }
//
//         Cypress.currentUser = response?.body;
//
//         return Cypress.currentUser;
//       });
//   });
// });
//
// /**
//  * Logout the current user.
//  *
//  * @example cy.logout();
//  */
// Cypress.Commands.add('logout', () => {
//   return cy
//     .then((token) => {
//       return cy.request({
//         method: 'POST',
//         url: '/__cypress__/logout',
//         body: { _token: token },
//         log: false,
//       });
//     })
//     .then(() => {
//       Cypress.log({ name: 'logout', message: '' });
//     });
// });

// @ts-ignore
Cypress.Commands.add('getSessionStorage', (key: string) => {
  cy.window().then((window) => window.sessionStorage.getItem(key));
});

// @ts-ignore
Cypress.Commands.add('setSessionStorage', (key: string, value: string) => {
  cy.window().then((window) => window.sessionStorage.setItem(key, value));
});

// Prevent TypeScript from reading file as legacy script
export {};
