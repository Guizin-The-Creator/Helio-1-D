const express = require('express');
const ControlTerreno = require('../control/ControlTerreno');
const MiddlewareTerreno = require('../middleware/MiddlewareTerreno');

module.exports = class RouterTerreno {
    criarRotasTerreno() {
        this._router = express.Router();
        this._controleTerreno = new ControlTerreno();
        this._middlewareTerreno = new MiddlewareTerreno();

        // Trata a rota GET: /terreno/:largura/:comprimento
        this._router.get('/:largura/:comprimento',
            this._middlewareTerreno.validar_dimensoes, // Valida se as dimensões são válidas
            this._controleTerreno.controle_get_calcular_area_e_perimetro // Chama o controlador
        );

        return this._router;
    }
};
