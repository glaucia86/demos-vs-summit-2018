class Pessoa {
    //Propriedades da Classe:
    nome: string;
    sobrenome: string;
    idade: number;
    email: string;
    tempoEmpresa: number;
    salario: number;
    status: boolean;

    //Construtor simples
    constructor(nome: string, sobrenome: string, idade: number, email: string, tempoEmpresa: number,salario: number, status: boolean) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.email = email;
        this.tempoEmpresa =  tempoEmpresa;
        this.salario = salario;
        this.status = status;
    }

    //Método da Classe:
    dadosPessoa() {
        console.log("======= Dados Pessoa Empresa: XPTO ========");
        console.log("Nome................: " + this.nome);
        console.log("Sobrenome...........: " + this.sobrenome);
        console.log("Idade...............: " + this.idade);
        console.log("E-mail..............: " + this.email);
        console.log("Status..............: " + this.status);
        console.log("Salário.............: R$ " + this.salario);
        console.log("Tempo de Empresa....: " + this.tempoEmpresa);
    }
}

let pessoa = new Pessoa("Glaucia", "Lemos", 30, "glaucia@xpto.com", 5, 1000, true );
pessoa.dadosPessoa();