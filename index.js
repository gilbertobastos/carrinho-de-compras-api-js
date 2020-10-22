// const express = require('express');
// const app = express();
// const port = 3000;


const {Produto, Compra} = require('./sequelize/index');
const Carrinho = require('./models/carrinho');

Produto.findAll()
    .then(result => {
        console.log(result);
    })
    .catch(err => {
        console.error(err);
    });






// app.get('/', (req, res, next) => {
//     res.status(200).send('O bom da vida é ser feliz :D');
//     res.end();
// });

// Produto.create({
//     nome: 'Batata Frita',
//     valor: 99.50,
//     descricao: 'Bata Frita é bom'
// }).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.error(err);
// });
 
// app.listen(port);
