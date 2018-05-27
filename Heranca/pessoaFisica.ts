class Pessoa1 {
    //Construtor simples
    constructor(
        public nome: string, 
        public sobrenome: string, 
        public idade: number, 
        public email: string, 
        public tempoEmpresa: number,
        private salario: number, 
        public status: boolean
    ){}

    //Método da Classe:
    dadosPessoa() {
        console.log("Seja Bem-Vindo(a)");
    }
}

class PessoaFisica extends Pessoa1 {

  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    email: string,
    tempoEmpresa: number,
    salario: number,
    status: boolean,
    private cpf: string,
    public rg: string
  ) {
    super(nome, sobrenome, idade, email, tempoEmpresa, salario, status);
  }

  dadosCompletosPessoaFisica() {
    super.dadosPessoa();
    console.log("======= Dados Pessoa Física: XPTO ========");
    console.log("Nome................: " + this.nome);
    console.log("Sobrenome...........: " + this.sobrenome);
    console.log("Idade...............: " + this.idade);
    console.log("E-mail..............: " + this.email);
    console.log("Status..............: " + this.status);
    console.log("CPF.................: " + this.cpf);
    console.log("RG..................: " + this.rg);
    //console.log("Salário.............: R$ " + this.salario);
    console.log("Tempo de Empresa....: " + this.tempoEmpresa);
  }
}

let pessoaFisica = new PessoaFisica("Glaucia", "Lemos", 30, "glaucia@xpto.com", 5, 1000, true, "111.111.111-11", "00.000-0");
pessoaFisica.dadosCompletosPessoaFisica();