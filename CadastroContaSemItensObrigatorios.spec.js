///<reference types="cypress" />

describe('Cadastro de Conta ', () => {
    before(()=> { 
        cy.visit('http://automationpractice.com/index.php')
        cy.get('.login').click()
    })

    //Cadastro sem informar os itens obrigatórios
    it('login', () => {
        cy.get('#email_create').type('pessoa10@desafio.com.br')
        cy.get('#SubmitCreate > span').click()       
        cy.get('#id_gender1').click()
        cy.get('#days').select('15')
        cy.get('#months').select('July')
        cy.get('#years').select('2000')
        cy.get('#newsletter').click()
        cy.get('#optin').click()
        cy.get('#company').type('Estudante')
        cy.get('#address2').type('Rua dos Desafios, 10')
        cy.get('#other').type('Outras informações')
        cy.get('#phone').type('+5532226655')
        cy.get('#submitAccount > span').click()           
    }) 
})