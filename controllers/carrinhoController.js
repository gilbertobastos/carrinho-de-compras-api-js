const Carrinho = require('../models/carrinho');
const Produto = require('../sequelize/index');

/**
 * Método que vai retornar ou um carrinho apenas pelo "id"
 * ou irá "criar" um novo carrinho para o usuário poder
 * utilizar.
 */
exports.getCarrinho = (req, res, next) => {
    const idCarrinho = req.params.id;

    if (idCarrinho) {
        res.JSON(Carrinho.getCarrinhoById(idCarrinho))
            .Status(200)
            .end();
    } else {
        res.JSON(Carrinho.getCarrinhoDesocupado())
            .Status(201)
            .end();
    }
}

/**
 * Método que vai adicionar um produto no carrinho para que o 
 * mesmo guarde. 
 */
exports.addProdutoNoCarrinho = (req, res, next) => {
    const idCarrinho = req.params.id; // Esse vem via GET
    const idProduto = req.body.idProduto; // Esse vem via POST
    const qtdProduto = req.body.qtdProduto; // Esse também vem via POST.

    const carrinho = Carrinho.getCarrinhoById(idCarrinho);
    if (!carrinho) {
        res.JSON({'Erro': 'Não foi localizado nenhum carrinho com o ID informado.'})
            .Status(200)
            .end();
            return;
    }

    const produto = Produto.findById(idProduto);
    if (!produto) {
        res.JSON({'Erro': 'Não foi localizado nenhum produto com o ID informado.'})
            .Status(200)
            .end();
            return;
    }

    carrinho.addProduto(produto, qtdProduto);
    res.Status(200).end();
}
