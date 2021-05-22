/// <reference types="cypress" />

context('Assertions', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  describe('AllPokemon', () => {
    it('should render a search input and list', () => {
      cy.get('[data-testid="allPokemon-search"]')
        .should('be.visible');

      cy.get('[data-testid="allPokemon-list"]')
        .should('be.visible');
    })

    it('should allow users to search the list', () => {
      cy.get('[data-testid="allPokemon-list"]')
      .find('.ReactVirtualized__Grid__innerScrollContainer')
      .children()
      .should('have.length.at.least', 5);

      cy.get('[data-testid="allPokemon-search"] input')
      .type('Charizard', { delay: 100 });

      cy.get('[data-testid="allPokemon-list"]')
      .find('.ReactVirtualized__Grid__innerScrollContainer')
      .children()
      .should('have.length', 1);
    })

    it('should allow users to navigate to a specific list items detail page', () => {
      cy.get('[data-testid="allPokemon-search"] input')
      .type('Charizard', { delay: 100 });

      cy.get('[data-testid="allPokemon-list"]')
      .find('.ReactVirtualized__Grid__innerScrollContainer')
      .children()
      .first()
      .click();

      cy.location('pathname').should('include', 'Charizard')
    })
  })
})
