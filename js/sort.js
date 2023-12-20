const btnOrdenar = document.querySelector('#btnOrdenarPorPreco');

btnOrdenar.addEventListener('click', ordenaLivros);

function ordenaLivros() {
  let livrosOrdenados = livros.sort((a,b) => a.preco - b.preco)

  exibirLivros(livrosOrdenados)
}