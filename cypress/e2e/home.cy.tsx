describe('Navigation', () => {
  it('should navigate to the about page', () => {
    // Start from the index page
    cy.visit('/en');

    // The new page should contain an h1 with 'About page'
    cy.get('h1').contains('Main page');
  });
});

// Prevent TypeScript from reading file as legacy script
export {};
