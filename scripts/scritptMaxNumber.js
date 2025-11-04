/**
 * Recebe uma lista de números inteiros e positivos e retorna uma string no formato
 * "{maiorNumero} {indice}" com o maior valor e sua posição.
 */
function maxNumber(numeros = []) {
    let maiorValor = -1;
    let indiceMaiorValor = -1;

    for (let index = 0; index < numeros.length; index += 1) {
        const valorAtual = numeros[index];


        if (valorAtual > maiorValor) {
            maiorValor = valorAtual;
            indiceMaiorValor = index;
        }
    }

    return `${maiorValor} ${indiceMaiorValor}`;
}

console.log(maxNumber([2, 5]))
module.exports = { maxNumber };
