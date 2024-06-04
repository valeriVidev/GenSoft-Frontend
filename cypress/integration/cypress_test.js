describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
})

describe('Testing services', () => {
  it('Goes to services', () => {
    cy.visit('http://localhost:5173/');
    cy.get('a[href="/services"]').first().click();
    cy.get('img').should('be.visible');
  })
})


describe('Testing about', () => {
  it('Goes to about', () => {
    cy.visit('http://localhost:5173/');
    cy.get('a[href="/about"]').first().click();
    cy.get('img').should('be.visible');

  })
})