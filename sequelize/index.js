const Sequelize = require('sequelize');

const ProdutoModel = require('./models/produto');
const CompraModel = require('./models/compra');
const CompraProdutosModel = require('./models/compraProdutos');

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './sequelize/CarrinhoDeCompras.db',

});

const Produto = ProdutoModel(sequelize);
const Compra = CompraModel(sequelize);
const CompraProdutos = CompraProdutosModel(sequelize);

Produto.belongsToMany(Compra, {through: CompraProdutos});
Compra.belongsToMany(Produto, {through: CompraProdutos});
sequelize.sync();

module.exports = {
    Produto,
    Compra,
    CompraProdutos
};