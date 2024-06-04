describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
    })
})

describe('Testing services', () => {
  it('Goes to services', () => {
    cy.visit('http://localhost:5173/');
    cy.get('._font_link_wqkx4_5 > [href="/services"]').click();
    cy.get('img').should('be.visible');
/* ==== End Cypress Studio ==== */
  })
})


describe('Testing about', () => {
  it('Goes to about', () => {
    cy.visit('http://localhost:5173/');
    cy.get('._font_link_wqkx4_5 > [href="/about"]').click();
    cy.get(':nth-child(4) > ._title_target_1n7bx_115').should('be.visible');

  })
})