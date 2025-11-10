/**
 * Recebe uma lista de números inteiros e positivos e retorna uma string no formato
 * "{maiorNumero} {indice}" com o maior valor e sua posição.
 */

function maxNumber(numeros = []) {
  let maiorNumero = 0;
  let indiceMaiorNumero = 0;

  // -- SOLUÇÃO 1 : FOR
  //   for (let i = 0; i < numeros.length; i++) {
  //     if (numeros[i] > maiorNumero) {
  //       maiorNumero = numeros[i];
  //       indice = i;
  //     }
  //   }

  // -- SOLUÇÃO 2 : FOREACH
  numeros.forEach((numero, indice) => {
    if (numero > maiorNumero) {
      maiorNumero = numero;
      indiceMaiorNumero = indice;
    }
  });

  return `${maiorNumero} ${indiceMaiorNumero}`;
}

module.exports = { maxNumber };
