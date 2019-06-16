describe("Location State", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("navigates to page 2 with location state", () => {
    cy.getByText(/go to page 2/i).click()
    cy.getByText(/success/i)
  })
})
