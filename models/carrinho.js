/**
 * O carrinho!
 * 
 * Obs.: Essa classe não existirá no banco de dados pois 
 *       seriam dados teoricamente de "sessão".
 */
class Carrinho {
    constructor() {
        this.id = Buffer.from((new Date().toString())).toString('base64');

        /* Cada entrada do array abaixo será uma dupla, onde
           um dos valores será o produto e o outro a quantidade
           de vezes que o mesmo está presente no carrinho. */
        this.produtos = [];
    }

    /**
     * Método que adiciona no carrinho um produto X vezes.
     * 
     * @param {Produto} produto O produto.
     * @param {BigInt} quantidade Quantidade do produto a ser adicionado no carrinho.
     */
    addProduto(produto, quantidade = 1) {
        this.produtos.forEach(produtoLista => {
            if (produto.id === produtoLista.id) {
                produtoLista.quantidade += quantidade;
                return;
            }
        });

        this.produtos.add({
            produto: produto,
            quantidade: quantidade
        });
    };
}

module.exports = Carrinho;