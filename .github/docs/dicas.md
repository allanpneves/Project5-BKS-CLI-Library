# Dicas

Ao realizar o git clone e iniciar o vscode receberá uma notificação solicitando que instale as extensões recomendas, é só clicar em `install`.
Caso ela não apareça abra as extensões do vscode e cole o comando `@recommended` na barra de busca, ele filtrará as extensões recomendadas que você não possui.

Antes de iniciar o código, rodar o commando `npm install` no terminal para instalar as dependências. De preferência utilize *ubuntu* ou *gitbash*, porém em teoria funciona tranquilamente com o *powershell*, **não use o *CMD* as ferramentas não dão suporte para ele.**

## Arquivos diferentes do repositório:
1. ESLint
    - Esse arquivo define padrões de escrita de código JavaScript.
2. Prettier.json
    - Esse arquivo define um padrão de estilo de código.
3. Pasta `.vscode/`:
    - Essa pasta contém configurações comuns que sobrescrevem as configurações do seu vscode apenas nesse projeto, é util para evitar quebra de padrões e conflitos, ela também recomenda extensões necessárias para os arquivos dos linters funcionarem.
4. Husky: *"Ele não morde!"*
    - Esse modulo Node interage com o git e executa scripts de formatação e normalização do `ESLint` e `Prettier` no código antes do seu commit ser realizado para que o código enviado no commit siga os padrões recomendados de escrita.
5. Pasta `.github`:
    - Contém arquivos de documentação da wiki do projeto
