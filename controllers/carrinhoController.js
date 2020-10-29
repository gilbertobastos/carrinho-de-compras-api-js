const Carrinho = require('../models/carrinho');
const CarrinhoRepository = require('../repositories/carrinhoRepository');
const Produto = require('../sequelize/index');

/* Os carrinhos */
const carrinhoRepository = new CarrinhoRepository();

/**
 * Método que vai retornar ou um carrinho apenas pelo "id"
 * ou irá "criar" um novo carrinho para o usuário poder
 * utilizar.
 */
exports.getCarrinho = (req, res, next) => {
    const idCarrinho = req.params.id;

    console.log('Batata: ' + idCarrinho);

    if (idCarrinho) {
        res.write(JSON.stringify(carrinhoRepository.getCarrinhoById(idCarrinho)));
        res.STATUS_CODE = 200;
        res.end();
    } else {
        res.write(JSON.stringify(carrinhoRepository.getCarrinhoDesocupado()));
        res.STATUS_CODE = 201;
        res.end();
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

    const carrinho = carrinhoRepository.getCarrinhoById(idCarrinho);
    if (!carrinho) {
        res.JSON({ 'Erro': 'Não foi localizado nenhum carrinho com o ID informado.' })
            .Status(200)
            .end();
        return;
    }

    const produto = Produto.findById(idProduto);
    if (!produto) {
        res.JSON({ 'Erro': 'Não foi localizado nenhum produto com o ID informado.' })
            .Status(200)
            .end();
        return;
    }

    carrinho.addProduto(produto, qtdProduto);
    res.Status(200).end();
}
