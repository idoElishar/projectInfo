describe("template spec", () => {
  it("renders the default elements on screen", () => {
    cy.visit("http://localhost:8002");
    cy.get('[data-testid="cypress-title"]')
      .should("exist")
      .should("have.text", "About Us");
  });
  it("render the service data on screen", () => {
    cy.visit("http://localhost:8002");
    cy.get('[data-testid="course-658b30a13fb443e06e3f336a"]').should("exist");
    cy.get('[data-testid="course-658b30a13fb443e06e3f3369"]').should("exist");
    cy.get('[data-testid="course-658b30a13fb443e06e3f336d"]').should("exist");
  });
  describe("My First Test", () => {
    it('clicking "type" navigates to a new url', () => {
      cy.visit("http://localhost:8002");
      cy.get('[data-testid="button-658b30a13fb443e06e3f336a"]').should("exist").click()
      cy.url().should("include", "/course/");
    });
  });
  it("should load with the correct image", () => {
    const imageUrl = 'https://repository-images.githubusercontent.com/37153337/9d0a6780-394a-11eb-9fd1-6296a684b124';
    const courseId = "658b30a13fb443e06e3f336a"; 
  
    cy.visit("http://localhost:8002");
    cy.get(`[data-testid="image-${courseId}"]`)
      .should("have.css", "background-image", `url("${imageUrl}")`);
  });
}); 
   