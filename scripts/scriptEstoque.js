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
  const nomeProduto = [];

  if (produtos.length !== quantidades.length) {
    throw new Error("As listas devem ter o mesmo tamanho.");
  }

  for (let i = 0; i < produtos.length; i++) {
    if (quantidades[i] === 0) {
      nomeProduto.push(`${produtos[i]} zerado`);
    }
  }

  if (nomeProduto.length === 0) {
    return ["estoque completo"];
  }

  console.log(nomeProduto);
  return nomeProduto;
}

module.exports = { estoque };
