// Consume dados da API- gutendex - (livros)

async function buscarLivros(tema) {
  const resposta = await fetch(`https://gutendex.com/books?search=${tema}`);
  const dados = await resposta.json();
  return dados;
}


// teste no terminal 

async function executar() {
  const resultado = await buscarLivros('aventura');
  console.log(resultado);
}

executar();
