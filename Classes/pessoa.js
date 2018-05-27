var Pessoa = (function () {
    //Construtor simples
    function Pessoa(nome, sobrenome, idade, email, tempoEmpresa, salario, status) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.email = email;
        this.tempoEmpresa = tempoEmpresa;
        this.salario = salario;
        this.status = status;
    }
    //Método da Classe:
    Pessoa.prototype.dadosPessoa = function () {
        console.log("======= Dados Pessoa Empresa: XPTO ========");
        console.log("Nome................: " + this.nome);
        console.log("Sobrenome...........: " + this.sobrenome);
        console.log("Idade...............: " + this.idade);
        console.log("E-mail..............: " + this.email);
        console.log("Status..............: " + this.status);
        console.log("Salário.............: R$ " + this.salario);
        console.log("Tempo de Empresa....: " + this.tempoEmpresa);
    };
    return Pessoa;
}());
var pessoa = new Pessoa("Glaucia", "Lemos", 30, "glaucia@xpto.com", 5, 1000, true);
pessoa.dadosPessoa();
//# sourceMappingURL=pessoa.js.map