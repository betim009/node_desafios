`
Case 1:

Crie uma funcao para resolver um problema de estoque.

Essa funcao recebe dois parametros, duas listas(arrays) do mesmo tamanho. 
- Primeiro array apenas com strings.
- Segundo array apenas com numeros inteiros.

- O primeiro array tera nome de produtos de informatica.
- O segundo array a quantidade desse produto. 

Exemplo dos parametros - com tamanho 3: 
["Mouse", "Teclado", "Monitor"]
[10, 10, 0]

Voce deve entregar uma funcao que vai exibir o nome do produto que
a quantidade é igual a zero: 

Saida 1, com apenas um produto zerado:
["Monitor zerado"]

Saida 2, com mais de um produto zerado:
["SSD zerado", "Monitor LG zerado", "Webcam zerado"]

Se nao houver produtos com a quantidade igual a zero, deve exibir
no "estoque completo".
`;

/**
 * Recebe duas listas paralelas contendo os nomes dos produtos e suas quantidades,
 * retornando uma lista com os avisos de estoque zerado ou "estoque completo".
 */
function estoque(produtos = [], quantidades = []) {
    if (!Array.isArray(produtos) || !Array.isArray(quantidades)) {
        throw new TypeError('Os parâmetros devem ser arrays.');
    }

    if (produtos.length !== quantidades.length) {
        throw new Error('As listas devem ter o mesmo tamanho.');
    }

    const zerados = [];

    for (let index = 0; index < produtos.length; index += 1) {
        const produto = produtos[index];
        const quantidade = quantidades[index];

        if (typeof produto !== 'string') {
            throw new TypeError('Todos os produtos devem ser strings.');
        }

        if (!Number.isInteger(quantidade)) {
            throw new TypeError('Todas as quantidades devem ser números inteiros.');
        }

        if (quantidade === 0) {
            zerados.push(`${produto} zerado`);
        }
    }

    if (zerados.length === 0) {
        return ['estoque completo'];
    }

    return zerados;
}

console.log(estoque(["Mouse"], [0]))
module.exports = { estoque };
