const Banco1 = require("../src/banco");

describe('Testes da classe Banco', () => {
    test('Depositar dinheiro', async() => {
        const conta = new Banco1('Conta Teste', 1000);
        conta.depositar(500);
        expect(conta.obterSaldo()).toStrictEqual(1500);
    });
    
    test('Sacar dinheiro', async() => {
        const conta = new Banco1('Conta Teste', 1000);
        conta.sacar(500);
        expect(conta.obterSaldo()).toStrictEqual(500);
    });

    test('Sacar dinheiro não tendo saldo em conta', async() => {
        const conta = new Banco1('Conta Teste', 1000);
        expect(() => conta.sacar(2000)).toThrow('Saldo insuficiente');
    })
    
    test('Transferir dinheiro para outra conta', async() => {
        const contaJoao = new Banco1('Conta Joao', 1000);
        const contaLucas = new Banco1('Conta Lucas', 10000);
        contaLucas.transferir(100, contaJoao);
        expect(contaJoao.obterSaldo()).toBe(1100);
        expect(contaLucas.obterSaldo()).toBe(9900);
    })

    test('Definir limite de saque', () => {
        const conta = new Banco1('Conta Teste', 1000);
        conta.definirLimiteDeSaque(250);
        expect(() => conta.verificarLimiteDeSaque(2250)).toThrow("Saque acima do limite permitido");
    })

    test('Aplicar juros ao saldo', async() => {
        const conta = new Banco1('Conta Teste', 1000);
        conta.aplicarJuros(10);
        expect(conta.obterSaldo()).toStrictEqual(1100);
    })

    test('Pagar uma conta', async() => {
        const conta = new Banco1('Conta Teste', 1000);
        conta.pagarConta(700)
        expect(conta.obterSaldo()).toStrictEqual(300);
    })

    
})
