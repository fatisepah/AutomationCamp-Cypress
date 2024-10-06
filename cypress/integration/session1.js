///refrence types = "cypress"/>
describe('suite 1', () => {
    it('google Search', function() {
        cy.visit('https://google.com')
        cy.get("input[name='q']").type('cypress{enter}')
    })
    
    it('2-Cypress Website',() => {
        cy.visit('https://cypress.io')
        cy.title().should('eq','JavaScript End to End Testing Framework | Cypress.io testing tools')
        cy.title().should('include', ' End to End Testing Framework')
    })
})
