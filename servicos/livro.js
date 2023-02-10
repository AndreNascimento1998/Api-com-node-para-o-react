const fs = require('fs');

function getTodosLivros() {
    return JSON.parse(fs.readFileSync("livros.json"));
}

function getLivroPorId(id) {
    const livros = JSON.parse(fs.readFileSync("livros.json"));

    const livroFiltrado = livros.filter( (livro) => livro.id === id);
    return livroFiltrado;
}

function insereLivro(livroNovo) {
    const livros = JSON.parse(fs.readFileSync('livros.json'));

    const novaLista = [...livros, livroNovo];

    fs.writeFileSync('livros.json', JSON.stringify(novaLista));
}

function modificaLivro(mod, id) {
    let livrosAtuais = JSON.parse(fs.readFileSync("livros.json"));

    const indiceModificado = livrosAtuais.findIndex(livro => livro.id === id);

    const conteudoMudado = {...livrosAtuais[indiceModificado], ...mod};

    livrosAtuais[indiceModificado] = conteudoMudado;

    fs.writeFileSync('livros.json', JSON.stringify(livrosAtuais));
}

module.exports = {
    getTodosLivros,
    getLivroPorId,
    insereLivro,
    modificaLivro
}