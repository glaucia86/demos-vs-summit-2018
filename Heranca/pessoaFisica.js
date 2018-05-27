var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Pessoa1 = (function () {
    //Construtor simples
    function Pessoa1(nome, sobrenome, idade, email, tempoEmpresa, salario, status) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
        this.email = email;
        this.tempoEmpresa = tempoEmpresa;
        this.salario = salario;
        this.status = status;
    }
    //Método da Classe:
    Pessoa1.prototype.dadosPessoa = function () {
        console.log("Seja Bem-Vindo(a)");
    };
    return Pessoa1;
}());
var PessoaFisica = (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, sobrenome, idade, email, tempoEmpresa, salario, status, cpf, rg) {
        var _this = _super.call(this, nome, sobrenome, idade, email, tempoEmpresa, salario, status) || this;
        _this.cpf = cpf;
        _this.rg = rg;
        return _this;
    }
    PessoaFisica.prototype.dadosCompletosPessoaFisica = function () {
        _super.prototype.dadosPessoa.call(this);
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
    };
    return PessoaFisica;
}(Pessoa1));
var pessoaFisica = new PessoaFisica("Glaucia", "Lemos", 30, "glaucia@xpto.com", 5, 1000, true, "111.111.111-11", "00.000-0");
pessoaFisica.dadosCompletosPessoaFisica();
//# sourceMappingURL=pessoaFisica.js.map