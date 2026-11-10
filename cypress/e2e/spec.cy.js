describe('template spec', () => {

  it('login valido', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get('[title="Form Authentication - Log in and out of a secure area"] > a').click()
    cy.get('[name="username"]').type("tomsmith")
    cy.get('[name="password"]').type("SuperSecretPassword!")
    cy.get('.fa').click()
  })

  it('5 elementos', () => {
    cy.visit('https://the-internet.herokuapp.com/')
    cy.get('[title="Shifting Content - Elements that move between page loads"] > a').click()
    cy.get('[href="/shifting_content/menu"]').click()
    cy.get('#content ul li').should('have.length', 5);
    
  })

})





  
