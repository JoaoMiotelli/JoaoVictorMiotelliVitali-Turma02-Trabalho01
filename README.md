# Testes Unitários da Biblioteca

## Começando

Para trabalhar com este projeto, siga os passos abaixo:

1. **Instale o Node.js**: Certifique-se de ter [Node.js](https://nodejs.org/) (versão >= 18.x) instalado em sua máquina.
2. **Instale as Dependências**: Execute `npm install` para instalar todas as dependências do projeto.
3. **Execute os Testes**: Execute `npm test` para rodar toda a suíte de testes e garantir que todas as funcionalidades da classe `Biblioteca` estão funcionando conforme o esperado.
4. **Execute com Cobertura**: Execute `npm run coverage` para rodar toda a suíte de testes com relatório de cobertura, para verificar quais partes do seu código estão cobertas pelos testes.

Todos os artefatos de execução, incluindo relatórios de cobertura de testes, podem ser encontrados no diretório `./coverage`. Para limpar esses arquivos, execute `npm run clean`.

## Estrutura do Projeto

O projeto está estruturado da seguinte forma:

- **src**: Contém o código-fonte, incluindo a classe `Biblioteca`.
- **test**: Contém arquivos de teste unitário para a classe `Biblioteca`.

## Testes

Os testes unitários são projetados para verificar a funcionalidade da classe `Biblioteca`. Os testes incluem:

- Adicionar e remover livros e membros
- Buscar livros e membros por ID
- Listar livros por diferentes critérios (por exemplo, emprestados, disponíveis, autor, gênero)
- Emprestar e devolver livros

Para garantir que todas as funcionalidades estão funcionando corretamente, execute a suíte de testes com os comandos fornecidos acima.

Para mais detalhes sobre como os testes são escritos e como adicionar novos testes, consulte os arquivos no diretório `test`.
