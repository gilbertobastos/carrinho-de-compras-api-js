const { DataTypes } = require("sequelize");

/**
 * Representa uma compra com seus produtos e etc.
 */
module.exports = (sequelize) => {
    return sequelize.define('Compras', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        dataCompra: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW
        }
    });
};
