// Etapa 3 - Ler os parâmetros passados no terminal
const tema = process.argv[2];
const quantidade = parseInt(process.argv[3]);

// Validação simples
if (!tema || isNaN(quantidade)) {
  console.log("❌ Uso correto: node cli.js <tema> <quantidade>");
  console.log("Exemplo: node cli.js fantasia 5");
  process.exit(1);
}

console.log(`🔍 Tema: ${tema}`);
console.log(`📚 Número de livros: ${quantidade}`);
