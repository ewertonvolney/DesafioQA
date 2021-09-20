///<reference types="cypress" />

describe('Login Inválido', () => {
    before(()=> { 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
    })
    it('login', () => {
        cy.get('#email').type('p@desafio.com.br')       
        cy.get('#passwd').type('aeiou')    
        cy.get('#SubmitLogin > span').click() 
    }) 
})