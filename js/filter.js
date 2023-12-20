const btns = document.querySelectorAll('.btn');

btns.forEach(btn => btn.addEventListener('click', filtrarLivro));

function filtrarLivro() {
    const elementoBtn = document.getElementById(this.id);
    const  categoria = elementoBtn.value;
   let livrosFiltrados = categoria == 'disponivel' ? filtraDisponibilidade() : filtraCategoria(categoria)
   exibirLivros(livrosFiltrados);

   if (categoria == 'disponivel') {
    const valorTotal = calculaTotal(livrosFiltrados);
        exibeValorTotal(valorTotal);
   }
}

function filtraCategoria(categoria) {
    return livros.filter(livro => livro.categoria == categoria);
}

function filtraDisponibilidade() {
    return livros.filter(livro => livro.quantidade > 0);
}

function exibeValorTotal(valorTotal){
    elementoValoTotal.innerHTML = `<div class="livros__disponiveis">
      <p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>
    </div>`

}
