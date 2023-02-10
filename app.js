const express = require('express');
const rotaLivro = require('./rotas/livro.js')

const app = express();

app.use(express.json());
app.use('/livros', rotaLivro);

const port = 8080;
app.listen(port, () => {
    
})