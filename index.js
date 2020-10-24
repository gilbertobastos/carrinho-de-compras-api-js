const CarrinhoController = require('./controllers/carrinhoController');
const express = require('express');
const app = express();
const port = 3000;

app.get('/carrinho/', CarrinhoController.getCarrinho);

app.listen(port);

// Produto.create({
//     nome: 'Batata Frita',
//     valor: 99.50,
//     descricao: 'Bata Frita é bom'
// }).then(result => {
//     console.log(result);
// }).catch(err => {
//     console.error(err);
// });
 

