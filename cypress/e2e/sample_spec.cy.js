describe('My First Test', () => {
    it('Visits the React App', () => {
      cy.visit('/')
      cy.contains('Learn React')
    })
  })
  