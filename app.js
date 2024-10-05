const express = require('express');
const RouterTerreno = require('./router/RouterTerreno'); // Atualizar a importação para RouterTerreno

const app = express();
const portaServico = 3000;

// Middleware para habilitar o parsing de JSON no corpo das requisições
app.use(express.json());

const roteadorTerreno = new RouterTerreno(); // Atualizar a instância para RouterTerreno
// Caso chegue uma requisição para /terreno
app.use('/terreno', roteadorTerreno.criarRotasTerreno()); // Atualizar a rota base para /terreno

// Inicia a espera por requisições HTTP
app.listen(portaServico, () => {
    console.log(`API rodando no endereço: http://localhost:${portaServico}/terreno`); // Atualizar mensagem de log
});
