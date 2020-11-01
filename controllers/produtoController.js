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
                res.write(JSON.stringify(result));
                res.STATUS_CODE = 200;
                res.end();
            })
            .catch(err => {
                res.write(JSON.stringify(err));
                res.STATUS_CODE = 500;
                res.end();
            });
    } else {
        Produto.findAll()
            .then(result => {
                res.write(JSON.stringify(result));
                res.STATUS_CODE = 200;
                res.end();
            })
            .catch(err => {
                res.write(JSON.stringify(err));
                res.STATUS_CODE = 500;
                res.end();
            });
    }
}