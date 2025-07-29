# 🚀 **Blog AGI - Automação de Testes E2E**

[![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white)](https://cypress.io)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Blog AGI](https://img.shields.io/badge/Blog-AGI-blue?style=for-the-badge)](https://blog.agibank.com.br)

## 📋 **Sobre o Projeto**

Suite de testes automatizados E2E para validação das funcionalidades críticas do **Blog da Agibank**. O projeto foca na qualidade da experiência do usuário através de testes robustos e confiáveis.

### 🎯 **Funcionalidades Testadas**

- ✅ **Sistema de Pesquisa** - Validação completa do fluxo de busca
- ✅ **Tratamento de Erros** - Cenários com termos inexistentes
- ✅ **Newsletter** - Validação de campos obrigatórios
- ✅ **Responsividade** - Testes em múltiplos viewports

---

## 🛠️ **Tecnologias Utilizadas**

| Tecnologia | Versão | Finalidade |
|------------|--------|------------|
| **Cypress** | `Latest` | Framework de testes E2E |
| **JavaScript** | `ES6+` | Linguagem de programação |
| **Node.js** | `16+` | Runtime JavaScript |

---

## 📁 **Estrutura do Projeto**

```
test-agi-automation-web/
├── cypress/
│   ├── e2e/
│   │   └── spec.cy.js           # Cenários de teste principais
│   └── support/
│       ├── commands.js          # Comandos customizados
│       └── e2e.js              # Configurações globais
├── cypress.config.js            # Configuração do Cypress
└── README.md                   # Documentação do projeto
```

---

## ⚙️ **Configurações**

### **🕐 Timeouts Otimizados**
```javascript
defaultCommandTimeout: 10000ms    // Comandos gerais
pageLoadTimeout: 30000ms         // Carregamento de páginas
requestTimeout: 10000ms          // Requisições HTTP
responseTimeout: 30000ms         // Respostas do servidor
```

### **🌐 Base URL**
```javascript
baseUrl: 'https://blog.agibank.com.br'
```

### **📱 Viewports Testados**
- **Desktop:** 1280x720
- **Tablet:** 768x1024  
- **Mobile:** 375x667

---

## 🔧 **Comandos Customizados**

### **`cy.visitBlogAndValidate()`**
Acessa o blog e valida carregamento básico.

```javascript
cy.visitBlogAndValidate()
```

### **`cy.teste(text)`**
Executa pesquisa completa com termo específico.

```javascript
cy.teste('inteligência artificial')
```

---

## 📊 **Cenários de Teste**

### **🔍 Pesquisa Principal**
- ✅ Abertura do campo de pesquisa
- ✅ Inserção de termo válido
- ✅ Validação de resultados
- ✅ Verificação de redirecionamento

### **❌ Pesquisa Sem Resultados**
- ✅ Termo inexistente
- ✅ Mensagem de erro apropriada
- ✅ Comportamento da interface

### **📧 Newsletter**
- ✅ Validação de campo obrigatório
- ✅ Tratamento de alertas
- ✅ Fluxo de inscrição

---

## 🚀 **Como Executar**

### **📋 Pré-requisitos**
```bash
# Node.js 16+ instalado
node --version

# Cypress instalado globalmente (opcional)
npm install -g cypress
```

### **⚡ Execução Rápida**

```bash
# Modo interativo (recomendado para desenvolvimento)
npx cypress open

# Modo headless (CI/CD)
npx cypress run

# Executar teste específico
npx cypress run --spec "cypress/e2e/spec.cy.js"

# Executar com browser específico
npx cypress run --browser chrome
```

### **🎯 Execução por Cenário**

```bash
# Apenas teste de pesquisa
npx cypress run --grep "pesquisa"

# Apenas teste de newsletter
npx cypress run --grep "Newsletter"
```

---

## 📈 **Relatórios e Evidências**

### **📸 Screenshots**
- Capturadas automaticamente em falhas
- Localizadas em `cypress/screenshots/`

### **🎥 Vídeos**
- Gravação desabilitada por padrão (otimização)
- Habilitável via `cypress.config.js`

### **📊 Logs Detalhados**
- Console do navegador capturado
- Network requests monitorados
- Assertions detalhadas

---

## 🎯 **Best Practices Implementadas**

### **⏱️ Esperas Inteligentes**
- ❌ Sem `cy.wait()` com tempos fixos
- ✅ Uso de `.should()` para condições dinâmicas
- ✅ Timeouts configuráveis por contexto

### **🔄 Comandos Reutilizáveis**
- ✅ DRY (Don't Repeat Yourself)
- ✅ Modularização de ações comuns
- ✅ Manutenibilidade otimizada

### **🛡️ Tratamento de Erros**
- ✅ Captura de exceções JavaScript
- ✅ Retry automático em falhas
- ✅ Logs detalhados para debug

### **📱 Responsividade**
- ✅ Testes multi-dispositivo
- ✅ Viewports realistas
- ✅ Comportamento adaptativo

---

## 🐛 **Troubleshooting**

### **❓ Problemas Comuns**

**Erro: `astra is not defined`**
```javascript
// Solução implementada no beforeEach
cy.on('uncaught:exception', (err) => {
  if (err.message.includes('astra is not defined')) {
    return false
  }
})
```

**Elemento não visível**
```javascript
// Use force para elementos ocultos
cy.get('input').type('texto', {force: true})
```

**Timeout em pesquisas**
```javascript
// Timeout customizado para elementos lentos
cy.contains('Resultados', {timeout: 15000})
```

---

## 📚 **Documentação Adicional**

- [Cypress Documentation](https://docs.cypress.io)
- [Best Practices](https://docs.cypress.io/guides/references/best-practices)
- [Custom Commands](https://docs.cypress.io/api/cypress-api/custom-commands)

---

## 🤝 **Contribuição**

### **🔧 Setup para Desenvolvimento**
1. Clone o repositório
2. Instale dependências: `npm install`
3. Execute testes: `npx cypress open`

### **📝 Padrões de Código**
- Nomenclatura descritiva para testes
- Comandos customizados para ações repetitivas
- Comentários em código complexo
- Assertions específicas e claras

---

## 📞 **Contato**

**Projeto:** Automação Blog AGI  
**Tipo:** Testes E2E com Cypress  
**Foco:** Qualidade e Confiabilidade  

---

<div align="center">

**🚀 Feito com dedicação para garantir a qualidade do Blog AGI 🚀**

[![Quality](https://img.shields.io/badge/Quality-Assured-green?style=for-the-badge)]()
[![Tests](https://img.shields.io/badge/Tests-Automated-blue?style=for-the-badge)]()
[![Cypress](https://img.shields.io/badge/Powered_by-Cypress-success?style=for-the-badge)]()

</div> 