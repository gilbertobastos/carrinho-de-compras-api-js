const { DataTypes } = require("sequelize");
const sequelize = require("..");

/**
 * Irá representar uma tabela associativa entre 
 * as Compras e os Produtos.
 */
module.exports = (sequelize) => {
    return sequelize.define('CompraProdutos' , {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        }, 
        qtdCompras: {
            type: DataTypes.INTEGER
        }
    });
}