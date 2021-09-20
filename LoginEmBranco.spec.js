///<reference types="cypress" />

describe('Login em branco', () => {
    before(()=> { 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
    })
    it('login', () => {          
        cy.get('#SubmitLogin > span').click() 
    }) 
})