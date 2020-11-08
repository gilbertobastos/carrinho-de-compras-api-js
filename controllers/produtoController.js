const {Produto} = require('../sequelize/index');

/**
 * Método que vai retornar os produtos (ou o produto
 * com id id fornecido por parâmetro).
 */
exports.getProdutos = (req, res, next) => {
    const idProduto = req.params.id;

    if (idProduto) {
        Produto.findAll({where: {id: idProduto}})
            .then(result => {
                res.setHeader('Content-Type', 'text/json');
                res.write(JSON.stringify(result));                
                res.STATUS_CODE = 200;
                res.end();
            })
            .catch(err => {
                res.setHeader('Content-Type', 'text/json');
                res.write(JSON.stringify(err));                
                res.STATUS_CODE = 500;
                res.end();
            });
    } else {
        Produto.findAll()
            .then(result => {
                res.setHeader('Content-Type', 'text/json');
                res.write(JSON.stringify(result));                
                res.STATUS_CODE = 200;
                res.end();
            })
            .catch(err => {
                res.setHeader('Content-Type', 'text/json');
                res.write(JSON.stringify(err));                
                res.STATUS_CODE = 500;
                res.end();
            });
    }
}

/**
 * Método que irá criar um produto no banco de dados
 * com as informações fornecidas.
 */
exports.addProdutos = (req, res, next) => {
    const nomeProduto = req.body.nomeProduto;
    const valorProduto = req.body.valorProduto;
    const descProduto = req.body.descProduto;

    Produto.create({
        nome: nomeProduto,
        valor: valorProduto,
        descricao: descProduto})
        .then(result => {
            res.STATUS_CODE = 201;
            res.end();
        })
        .catch(err => {
            res.setHeader('Content-Type', 'text/json');
            res.write(JSON.stringify(err));
            res.STATUS_CODE = 400;
            res.end();
        });
}