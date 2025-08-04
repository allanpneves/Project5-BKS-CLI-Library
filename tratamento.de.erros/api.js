//API para tratamento de erros

async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(
        `Erro na resposta da API: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();
    return data;
  } catch (error) {
    if (error.name === "TypeError" && error.message.includes("fetch")) {
      console.error("Falha na conexão! não foi possível conectar à API.");
    } else {
      console.error(`Ocorreu um erro: ${error.message}`);
    }
    return null;
  }
}

fetchData("https://gutendex.com/books/").then((data) => {
  if (data) {
    console.log("Dados recebidos:", data);
  }
});
