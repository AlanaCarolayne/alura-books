let livros = [];
const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json';
getBuscarLivros();

async function getBuscarLivros() {
    const res = await fetch(endpointDaAPI);
    livros = await res.json();
    let livrosDesconto = aplicaDesconto(livros);
    exibirLivros(livrosDesconto);

}

