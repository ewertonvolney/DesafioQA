///<reference types="cypress" />

describe('Login realizado com sucesso', () => {
    before(()=> { 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
    })
    it('login', () => {
        cy.get('#email').type('pessoa7@desafio.com.br')       
        cy.get('#passwd').type('asdfg')    
        cy.get('#SubmitLogin > span').click()
       
    }) 
})