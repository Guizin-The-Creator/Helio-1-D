const Terreno = require('../model/Terreno'); 

module.exports = class ControlTerreno {
    controle_get_calcular_area_e_perimetro(request, response) {
        // Recupera as dimensões passadas pela URI
        const largura = parseFloat(request.params.largura);
        const comprimento = parseFloat(request.params.comprimento);

        const terreno = new Terreno(largura, comprimento); // Instância da classe Terreno
        const area = terreno.calcularArea(); // Calcula a área
        const perimetro = terreno.calcularPerimetro(); // Calcula o perímetro

        response.status(200).send({ area: area, perimetro: perimetro }); // Retorna a área e o perímetro
    }
};
