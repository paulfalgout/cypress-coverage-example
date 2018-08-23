context('coverage', function() {
  specify('cover the tested code', function() {
    cy.visit('index.html');
    cy.get('button').click();
  });
});
