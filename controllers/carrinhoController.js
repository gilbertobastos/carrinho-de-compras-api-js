const Carrinho = require('../models/carrinho');
const carrinhoRepository = require('../repositories/carrinhoRepository');
const {Produto} = require('../sequelize/index');

/**
 * Método que vai retornar ou um carrinho apenas pelo "id"
 * ou irá "criar" um novo carrinho para o usuário poder
 * utilizar.
 */
exports.getCarrinho = (req, res, next) => {
    const idCarrinho = req.params.id;

    if (idCarrinho) {
        res.setHeader('Content-Type', 'text/json');
        res.write(JSON.stringify(carrinhoRepository.getCarrinhoById(idCarrinho)));
        res.STATUS_CODE = 200;
        res.end();
    } else {
        res.setHeader('Content-Type', 'text/json');
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
        res.setHeader('Content-Type', 'text/json');            
        res.write(JSON.stringify({ 'Erro': 'Não foi localizado nenhum carrinho com o ID informado.' }));
        res.STATUS_CODE = 200;
        res.end();
        return;
    }

    Produto.findAll({where: {id: idProduto}})
        .then(produto => {
            if (produto.length === 0) {
                res.setHeader('Content-Type', 'text/json');
                res.write(JSON.stringify({ 'Erro': 'Não foi localizado nenhum produto com o ID informado.' }));
                res.STATUS_CODE = 200;
                res.end();
            } else {
                carrinho.addProduto(produto[0], qtdProduto);
                res.STATUS_CODE = 200;
                res.end();
            }
        })
        .catch(err => {
            res.setHeader('Content-Type', 'text/json');
            res.write(JSON.stringify(err));
            res.STATUS_CODE = 400;
            res.end();
        });
}
