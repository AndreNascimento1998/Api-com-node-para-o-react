const { getTodosLivros, getLivroPorId, insereLivro, modificaLivro, excluiLivro } = require('../servicos/livro');

function getLivros(req, res) {
    try{
        const livros =  getTodosLivros();
        res.send(livros);
    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function getLivro(req, res) {
    try{
        const id = req.params.id;
        if(id && Number(id)){
            const livro =  getLivroPorId(id);
            res.send(livro);
        }else {
            res.status(422);
            res.send('Id inválido');
        }

    }catch(error){
        res.status(500);
        res.send(error.message);
    }
}

function postLivro(req, res) {
    try {
        const livroNovo = req.body;

        if(req.body.nome){
            insereLivro(livroNovo);
            res.status(201)
            res.send('Livro inserido com sucesso');
        }{
            res.status(422);
            res.send('O campo nome é obrigatório.')
        }
    }catch (e){
        res.status(500);
        res.send(e.message);
    }
}

function patchLivro(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)){
            const body = req.body;
            modificaLivro(body, id);
            res.send('Item modificado com sucesso !');
        }else {
            res.status(422);
            res.send('Id inválido');
        }

    }catch (e){
        res.status(500);
        res.send(e.message);
    }
}

function deleteLivros(req, res) {
    try {
        const id = req.params.id;
        if(id && Number(id)){
            excluiLivro(id);
            res.send('Excluido com sucesso !');
        }else {
            res.status(422);
            res.send('Id inválido');
        }

    }catch(e) {
        res.status(500);
        res.send(e.message);
    }
}


module.exports = {
    getLivros,
    getLivro,
    postLivro,
    patchLivro,
    deleteLivros
}