/**
 * O carrinho!
 * 
 * Obs.: Essa classe não existirá no banco de dados pois 
 *       seriam dados teoricamente de "sessão".
 */
class Carrinho {

    constructor() {
        this.id = btoa((new Date().toString()));

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
                produtoLista.quantidade+= quantidade;
                return;
            }
        });

        this.produtos.add({
            produto: produto,
            quantidade: quantidade
        });
    };

    /** Irá armazenar todos os carrinhos... */
    static carrinhos = [];

    /**
     * Irá entregar um carrinho ao usuário para
     * que ele possa guardar suas compras.
     * 
     * @returns {Carrinho} O carrinho criado.
     */
    static getCarrinhoDesocupado() {
        const carrinho = new Carrinho();
        Carrinho.carrinhos.add(carrinho);
        return carrinho;
    }

    /**
     * Localizar o carrinho pelo Id.
     * 
     * @param {String} id O id do carrinho. 
     */
    static getCarrinhoById(id) {
        let carrinho = null;
        Carrinho.carrinhos.forEach(carrinhoLista => {
            if (carrinhoLista.id === id) {
                carrinho = carrinhoLista;               
            }
        });
        return carrinho;
    }

    
}