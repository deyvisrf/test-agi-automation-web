describe('Blog AGI - Análise Exploratória de Pesquisa', () => {

  const txtPesquisaInexistente = '/?s=xyzabc123termoinexistente'
  const txtPesquisaInteligencia = '/?s=inteligência artificial'
  const txtconsultaVazia = '/?s='
  const txtAlerta = 'Preencha este campo.'
  const txtFalha = 'Lamentamos'
  const txtResultados = 'Resultados'
  const btNewsLetter = '.wp-block-button__link'


  beforeEach(() => {
    cy.visitBlogAndValidate()
  })
  
  it('Teste de pesquisa com termos que existem', () => {
    cy.visit(txtPesquisaInteligencia)
    cy.url().should('include', '?s=intelig')
    cy.contains(txtResultados, {timeout: 15000}).should('be.visible')
  })

  it('Teste de pesquisa com termo inexistente', () => {
    cy.visit(txtPesquisaInexistente)
    cy.contains(txtFalha, {timeout: 15000}).should('be.visible')
  })

  it("Validar campo e-mail obrigatório para inscrição na Newsletter da página pesquisa", () => {
    cy.visit(txtconsultaVazia)
    cy.get(btNewsLetter).click();
    cy.on("window:alert", (t) => {
      expect(t).to.contains(txtAlerta);
    })
  })
}) 