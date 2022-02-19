/// <reference types="Cypress" />

before(() => {
    cy.intercept('GET', 'http://localhost:3004/menu', { fixture: 'data.json' }).as('getMenu')
    cy.visit("/menu")
    cy.wait("@getMenu")
})
describe("MenuItem", () => {
    it('Exists', () => {

        cy.contains("Gebackener Mozzarella").click()
        cy.get("#menuItem").should("be.visible")

    })



    it("Scrolls Away", function () {
        cy.get("#menuItem").scrollTo(0, -3000)
        cy.get("menuItem").should("not.exist")
    })




    it('Clicks Away', function () {
        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#clickAway').click()
        cy.get('#section-0 > .px-5 > :nth-child(5) > #dishCard > .flex-2\\/4 > .gap-1').click();
        cy.get('#clickAway').click()
    });


    it('Can Type', function () {
        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#exampleFormControlTextarea1').type("Hier werden Wünsche Wahr...");
        cy.get('#clickAway').click()
    });
    it('Displays Error Message', function () {
        cy.get('#section-0 > .px-5 > :nth-child(1) > #dishCard > .flex-2\\/4 > .text-xs').click();
        cy.get('#exampleFormControlTextarea1').type("IIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII");
        cy.get('.h-full.pt-2 > .self-end > .svg-inline--fa > path').click();
        cy.get('[data-cy=note-input-error] > .text-sm').should('have.text', 'Note cannot be greater than 240');
        cy.get('#clickAway').click()
    })
})

export { }