module.exports = class MiddlewareTerreno {
    validar_dimensoes(request, response, next) {
        const largura = parseFloat(request.params.largura);
        const comprimento = parseFloat(request.params.comprimento);

        // Verifica se as dimensões são números válidos e estão no intervalo positivo
        if (isNaN(largura) || isNaN(comprimento) || largura <= 0 || comprimento <= 0) {
            const objResposta = {
                status: false,
                msg: "As dimensões devem ser números válidos e positivos!",
            };
            return response.status(400).send(objResposta);
        }

        next(); // Chama o próximo middleware ou rota
    }
};
