const Biblioteca = require("../src/Trabalho01Turma02");

describe('Testes da classe Biblioteca', () => {

    beforeEach(() => {
        biblioteca = new Biblioteca();
    });

    test('Adição de um livro a Biblioteca', () => {
        const livro = { id: 1, titulo: 'Harry Potter e a pedra filosofal', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1997 };
        biblioteca.adicionarLivro(livro);
        expect(biblioteca.livros).toContain(livro);
    });

    test('Remover um livro da Biblioteca', () => {
        const livro = { id: 2, titulo: 'Harry Potter e a camara secreta', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1998 };
        biblioteca.removerLivro(2);
        expect(biblioteca.livros).not.toContain(livro);
    });

    test('Buscar um livro pelo seu ID na Biblioteca', () => {
        const livro = { id: 3, titulo: 'Harry Potter e o Prisioneiro de Askhaban', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1999 };
        biblioteca.adicionarLivro(livro);
        const livroEncontradoPorId = biblioteca.buscarLivroPorId(3);
        expect(livroEncontradoPorId).toEqual(livro);
    });

    test('Buscar um livro pelo seu Título na Biblioteca', () => {
        const livro = { id: 3, titulo: 'Harry Potter e o Prisioneiro de Askhaban', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1999 };
        biblioteca.adicionarLivro(livro);
        const livroEncontradoPorTitulo = biblioteca.buscarLivroPorTitulo('Harry Potter e o Prisioneiro de Askhaban');
        expect(livroEncontradoPorTitulo).toEqual([livro]);
    });

    test('Listar todos os livros presentes na Biblioteca', () => {
        const livro1 = { id: 1, titulo: 'Harry Potter e a pedra filosofal', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1997 };
        const livro2 = { id: 2, titulo: 'Harry Potter e a camara secreta', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1998 };
        const livro3 = { id: 3, titulo: 'Harry Potter e o Prisioneiro de Askhaban', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1999 };
        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);
        expect(biblioteca.listarLivrosDisponiveis()).toEqual([livro1, livro2, livro3]);
    });

    test('Adicionar um membro a Biblioteca', () => {
        const membro = { id: 1, nome: 'Roberto de Oliveira' };
        biblioteca.adicionarMembro(membro);
        expect(biblioteca.membros).toContain(membro);
    });

    test('Remover um membro a Biblioteca', () => {
        const membro = { id: 2, nome: 'Carlos Rodrigues' };
        biblioteca.adicionarMembro(membro);
        biblioteca.removerMembro(2);
        expect(biblioteca.membros).not.toContain(membro);
    });

    test('Buscar membro por ID na Biblioteca', () => {
        const membro = { id: 3, nome: 'Vinicius Alberto' };
        biblioteca.adicionarMembro(membro);
        const membroEncontradoPorId = biblioteca.buscarMembroPorId(3);
        expect(membroEncontradoPorId).toEqual(membro);
    });

    test('Listas os membros presentes na Biblioteca', () => {
        const membro1 = { id: 1, nome: 'Roberto de Oliveira' };
        const membro2 = { id: 2, nome: 'Carlos Rodrigues' };
        const membro3 = { id: 3, nome: 'Vinicius Alberto' };
        biblioteca.adicionarMembro(membro1);
        biblioteca.adicionarMembro(membro2);
        biblioteca.adicionarMembro(membro3);
        expect(biblioteca.listarMembros()).toEqual([membro1, membro2, membro3]);
    });

    test('Emprestar livros presentes na Biblioteca', () => {
        const livro = { id: 1, titulo: 'Harry Potter e a pedra filosofal', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1997, emprestado: false };
        const membro = { id: 1, nome: 'Roberto de Oliveira' };
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarMembro(membro);
        const resultado = biblioteca.emprestarLivro(1, 1);
        expect(resultado).toBe(true);
        expect(biblioteca.buscarLivroPorId(1).emprestado).toBe(true);
    });

    test('Devolver um livro para a Biblioteca', () => {
        const livro = { id: 2, titulo: 'Harry Potter e a camara secreta', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1998 , emprestado: true };
        const membro = { id: 2, nome: 'Carlos Rodrigues' };
        biblioteca.adicionarLivro(livro);
        biblioteca.adicionarMembro(membro);
        biblioteca.emprestarLivro(2, 2);
        const resultado = biblioteca.devolverLivro(2);
        expect(resultado).toBe(true);
        expect(biblioteca.buscarLivroPorId(2).emprestado).toBe(false);
    });

    test('Listas todos os livros emprestados', () => {
        const livroEmprestado1 = { id: 1, titulo: 'Harry Potter e a pedra filosofal', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1997, emprestado: true};
        const livroEmprestado2 = { id: 2, titulo: 'Harry Potter e a camara secreta', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1998, emprestado: true };
        const livroDisponivel1 = { id: 3, titulo: 'Harry Potter e o Prisioneiro de Askhaban', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1999, emprestado: false };
        biblioteca.adicionarLivro(livroEmprestado1);
        biblioteca.adicionarLivro(livroEmprestado2);
        biblioteca.adicionarLivro(livroDisponivel1);
        const livrosEmprestados = biblioteca.listarLivrosEmprestados();
        expect(livrosEmprestados).toContainEqual(livroEmprestado1);
        expect(livrosEmprestados).toContainEqual(livroEmprestado2);
        expect(livrosEmprestados).not.toContainEqual(livroDisponivel1);
    });

    test('Listas todos os livros disponíveis', () => {
        const livroEmprestado1 = { id: 1, titulo: 'Harry Potter e a pedra filosofal', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1997, emprestado: true};
        const livroDisponivel1 = { id: 2, titulo: 'Harry Potter e a camara secreta', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1998, emprestado: false };
        const livroDisponivel2 = { id: 3, titulo: 'Harry Potter e o Prisioneiro de Askhaban', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1999, emprestado: false };
        biblioteca.adicionarLivro(livroEmprestado1);
        biblioteca.adicionarLivro(livroDisponivel1);
        biblioteca.adicionarLivro(livroDisponivel2);
        const livrosEmprestados = biblioteca.listarLivrosDisponiveis();
        expect(livrosEmprestados).toContainEqual(livroDisponivel1);
        expect(livrosEmprestados).toContainEqual(livroDisponivel2);
        expect(livrosEmprestados).not.toContainEqual(livroEmprestado1);
    });

    test('Contabilizar os livros da bliblioteca', () => {
        const livro1 = { id: 1, titulo: 'Harry Potter e a pedra filosofal', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1997 };
        const livro2 = { id: 2, titulo: 'Harry Potter e a camara secreta', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1998 };
        const livro3 = { id: 3, titulo: 'Harry Potter e o Prisioneiro de Askhaban', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1999 };
        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);
        expect(biblioteca.contarLivros()).toBe(3);
    });

    test('Contabilizar os membros da bliblioteca', () => {
        const membro1 = { id: 1, nome: 'Roberto de Oliveira' };
        const membro2 = { id: 2, nome: 'Carlos Rodrigues' };
        const membro3 = { id: 3, nome: 'Vinicius Alberto' };
        biblioteca.adicionarMembro(membro1);
        biblioteca.adicionarMembro(membro2);
        biblioteca.adicionarMembro(membro3);
        expect(biblioteca.contarMembros()).toBe(3);
    });

    test('Listar os livros por autor', () => {
        const livro1 = { id: 1, titulo: 'Harry Potter e a pedra filosofal', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1997 };
        const livro2 = { id: 2, titulo: 'Harry Potter e a camara secreta', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1998 };
        const livro3 = { id: 3, titulo: 'Harry Potter e o Prisioneiro de Askhaban', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1999 };
        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);
        const livrosPorAutor = biblioteca.listarLivrosPorAutor('Jk Rowling');
        expect(livrosPorAutor).toEqual([livro1, livro2, livro3]);
    });

    test('Listar os livros pelo genero', () => {
        const livro1 = { id: 1, titulo: 'Harry Potter e a pedra filosofal', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1997 };
        const livro2 = { id: 2, titulo: 'Harry Potter e a camara secreta', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1998 };
        const livro3 = { id: 3, titulo: 'Harry Potter e o Prisioneiro de Askhaban', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1999 };
        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);
        const livrosPorGenero = biblioteca.listarLivrosPorGenero('Fantasia');
        expect(livrosPorGenero).toEqual([livro1, livro2, livro3]);
    });

    test('Atualizar as informações de um livro', () => {
        const livro = {  id: 1, titulo: 'Harry Potter e a pedra filosofal', autor: 'Jk Rowling', genero: 'Fantasia', ano: 1997 };
        biblioteca.adicionarLivro(livro);
        const novosDados = { titulo: 'Harry Potter e o cálice de fogo' };
        biblioteca.atualizarInformacaoLivro(1, novosDados);
        expect(biblioteca.buscarLivroPorId(1).titulo).toBe('Harry Potter e o cálice de fogo');
    });

    test('Listar os livros por ano', () => {
        const livro1 = { id: 1, titulo: 'Harry Potter e a pedra filosofal', autor: 'Jk Rowling', genero: 'Fantasia', ano: 2000 };
        const livro2 = { id: 2, titulo: 'Harry Potter e a camara secreta', autor: 'Jk Rowling', genero: 'Fantasia', ano: 2000 };
        const livro3 = { id: 3, titulo: 'Harry Potter e o Prisioneiro de Askhaban', autor: 'Jk Rowling', genero: 'Fantasia', ano: 2000 };
        biblioteca.adicionarLivro(livro1);
        biblioteca.adicionarLivro(livro2);
        biblioteca.adicionarLivro(livro3);
        const livrosPorAno = biblioteca.listarLivrosPorAno(2000);
        expect(livrosPorAno).toEqual([livro1, livro2, livro3]);
    });
});