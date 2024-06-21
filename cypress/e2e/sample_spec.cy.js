describe('My First Test', () => {
  it('Visits the React App and fails on purpose', () => {
    cy.visit('/')
    cy.contains('Non-Existent Text')
  })
})
