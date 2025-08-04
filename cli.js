// Etapa 4 -  Tratar os argumentos recebidos
import { Command } from 'commander';
import fetch from 'node-fetch'; 

const program = new Command();

program
  .action(async (tema, quantidade) => {
    const numero = parseInt(quantidade, 10);

    // 4. Tratar os argumentos recebidos
    if (isNaN(numero) || numero <= 0) {
      console.error("❌ Erro: A quantidade deve ser um número positivo.");
      process.exit(1);
    }

    console.log(`\n🔎 Buscando livros sobre: ${tema} (limite: ${numero})...\n`);
  });