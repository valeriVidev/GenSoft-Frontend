describe('Tests', () => {
  it('Test the availability of the services page', () => {
    cy.visit('http://localhost:5173/services');
    cy.get('img').should('be.visible');
  })

  it('Tests the availability of the about pagae', () => {
    cy.visit('http://localhost:5173/about');
    cy.get('img').should('be.visible');

  })

  it('Tests the availability of the login page', () => {
    cy.visit('http://localhost:5173/login');
    cy.get('img').should('be.visible');

  })
})