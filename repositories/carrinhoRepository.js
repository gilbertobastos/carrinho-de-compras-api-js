const Carrinho = require('../models/carrinho');

/**
 * Classe que irá armazenar apenas os carrinhos (usei esse padrão
 * pois os carrinhos não serão salvos no banco de dados, apenas a ordem).
 */
class CarrinhoRepository {
    /** Irá armazenar todos os carrinhos... */
    constructor() {
        this.carrinhos = [];
    }

    /**
     * Irá entregar um carrinho ao usuário para
     * que ele possa guardar suas compras.
     * 
     * @returns {Carrinho} O carrinho criado.
     */
    getCarrinhoDesocupado() {
        const carrinho = new Carrinho();
        this.carrinhos.push(carrinho);
        return carrinho;
    };

    /**
     * Localizar o carrinho pelo Id.
     * 
     * @param {String} id O id do carrinho. 
     * @returns {Carrinho} O carrinho (ou null se o mesmo não for localizado).
     */
    getCarrinhoById(id) {
        let carrinho = null;

        this.carrinhos.forEach(carrinhoLista => {
            if (carrinhoLista.id === id) {
                carrinho = carrinhoLista;
            }
        });

        return carrinho;
    }

    /**
     * Excluír carrinho de compra.
     * 
     * @param {String} id O id do carrinho.
     * @returns {Boolean} Se o carrinho foi excluído ou não. 
     */
    deletarCarrinhoById(id) {
        let indiceCarrinho = -1;

        this.carrinhos.forEach((carrinhoLista, indice) => {
            if (carrinhoLista.id === id) {
                indiceCarrinho = indice;
                return;
            }
        });

        if (indiceCarrinho > -1) {
            this.carrinhos.splice(indiceCarrinho, 1);
            return true;
        } else {
            return false;
        }
    }
}

module.exports = CarrinhoRepository;