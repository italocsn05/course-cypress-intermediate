describe('Login', ()=>{
    it('sucessfully', ()=>{
        cy.login();
        cy.get('.qa-user-avatar').should('exist');
    });
});