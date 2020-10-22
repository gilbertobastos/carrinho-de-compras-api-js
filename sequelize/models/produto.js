const { DataTypes } = require("sequelize");

/**
 * Representa um produto.
 */
module.exports = (sequelize) => {
    return sequelize.define('Produtos', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        valor: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        descricao: {
            type: DataTypes.STRING,
            allowNull: true
        }
    });
};