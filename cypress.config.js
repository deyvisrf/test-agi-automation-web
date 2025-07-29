const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,        // Tempo padrão para comandos (10s)
    pageLoadTimeout: 30000,              // Tempo para carregamento de página (30s)
    requestTimeout: 10000,               // Timeout para requests (10s)
    responseTimeout: 30000,              // Timeout para responses (30s)
    execTimeout: 60000,  
    baseUrl: 'https://blog.agibank.com.br',
    
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
