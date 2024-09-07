const pessoa = {
    nome: 'Kayky',
    sobrenome: 'Capello',
    peso: 86,
    altura: 1.85,
    falarOI(){
        console.log(`Oi meu nome é ${this.nome}. Prazer em te conhecer!`);
    },
    imc(){
        console.log(`O IMC de ${this.nome} ${this.sobrenome} é ${this.peso / (this.altura ** 2)}`);
    }
}

console.log(pessoa.imc())