 function aplicaDesconto(livros) {
    const desconto = 0.3;
    livrosDesconto  = livros.map(livro =>{
        return {...livro, preco: livro.preco-(livro.preco*desconto) }
        // pega todos os livros e copia, mas o preco faz a  logica de desconto, por isso o dos ...
    })
    return livrosDesconto;
 }