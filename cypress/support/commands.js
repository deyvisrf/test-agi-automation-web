// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
Cypress.Commands.add('visitBlogAndValidate', () => {
    cy.visit('/')
    cy.title().should('exist')
    cy.url().should('include', 'blog.agibank.com.br')
})

Cypress.Commands.add('teste', (text) => {
    cy.get('.slide-search.astra-search-icon').should('be.visible').click()
    cy.get('input[type="search"]').should('exist')
    
    cy.get('input[type="search"]')
      .type(text, {force: true})
      .type('{enter}', {force: true})
})
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })