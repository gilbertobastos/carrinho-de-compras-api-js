const {Produto, Compra, CompraProdutos} = require('./sequelize/index');
const CarrinhoController = require('./controllers/carrinhoController');
const ProdutoController = require('./controllers/produtoController');

const Carrinho = require('./models/carrinho');

const express = require('express');
var bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/carrinho/', CarrinhoController.getCarrinho);
app.get('/carrinho/:id', CarrinhoController.getCarrinho);
app.post('/carrinho/:id', CarrinhoController.addProdutoNoCarrinho);

app.get('/produto/', ProdutoController.getProdutos);
app.get('/produto/:id', ProdutoController.getProdutos);
app.post('/produto/', ProdutoController.addProdutos);

app.listen(port);