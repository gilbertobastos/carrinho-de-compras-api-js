const Sequelize = require('sequelize');

const ProdutoModel = require('./models/produto');
const CompraModel = require('./models/compra');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './sequelize/CarrinhoDeCompras.db'
});

const Produto = ProdutoModel(sequelize);
const Compra = CompraModel(sequelize);

Produto.belongsToMany(Compra, {through: 'ProdutosCompras'});
Compra.belongsToMany(Produto, {through: 'ProdutosCompras'});
sequelize.sync();

module.exports = {
    Produto,
    Compra
};