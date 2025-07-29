const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    defaultCommandTimeout: 10000,        // Tempo padrão para comandos (10s)
    pageLoadTimeout: 30000,              // Tempo para carregamento de página (30s)
    requestTimeout: 10000,               // Timeout para requests (10s)
    responseTimeout: 30000,              // Timeout para responses (30s)
    execTimeout: 60000,  
    baseUrl: 'https://blog.agibank.com.br',
    
    // Configurações para CI/CD
    video: process.env.CI ? true : false,  // Habilita vídeos apenas no CI
    screenshotOnRunFailure: true,
    videosFolder: 'cypress/videos',
    screenshotsFolder: 'cypress/screenshots',
    
    // Configurações de retry para CI
    retries: {
      runMode: 2,    // 2 tentativas quando rodando em modo headless (CI)
      openMode: 0    // 0 tentativas em modo interativo
    },
    
    setupNodeEvents(on, config) {
      // Configurações específicas para diferentes ambientes
      if (config.env.environment) {
        switch (config.env.environment) {
          case 'staging':
            config.baseUrl = 'https://staging.blog.agibank.com.br'
            break
          case 'production':
          default:
            config.baseUrl = 'https://blog.agibank.com.br'
            break
        }
      }
      
      return config
    },
  },
});
