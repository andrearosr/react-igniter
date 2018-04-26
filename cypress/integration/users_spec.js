describe('View users', function () {
  it('visits the home page', function () {
    cy.visit('/')
    cy.viewport(1920, 1080)
  })

  it('performs network request and displays list of users', function () {
    cy.server()

    cy.request('https://jsonplaceholder.typicode.com/users')
      .should((response) => {
        expect(response.status).to.eq(200)
        expect(response.body).to.have.length(10)
        expect(response).to.have.property('headers')
        expect(response).to.have.property('duration')
      })

    cy.get('.users-list')
  })
})
