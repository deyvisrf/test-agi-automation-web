describe('Blog AGI - Análise Exploratória de Pesquisa', () => {
  
  it('Teste de pesquisa com termos que existem', () => {
    cy.visitBlogAndValidate()
    cy.teste('inteligência artificial')
    cy.url().should('include', '?s=intelig')
    cy.contains('Resultados', {timeout: 15000}).should('be.visible')
  })

  it('Teste de pesquisa com termo inexistente', () => {
    cy.visitBlogAndValidate()
    cy.teste("xyzabc123termoinexistente")
    cy.contains('Lamentamos', {timeout: 15000}).should('be.visible')
  })

  it("Validar campo e-mail obrigatório para inscrição na Newsletter da página pesquisa", () => {
    cy.visitBlogAndValidate()
    cy.teste("/?s=")
    cy.get(".wp-block-button__link").click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains("Preencha este campo.");
    })
  })
}) 