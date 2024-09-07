function ValidaCPF(cpf) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: function () {
            return cpf.replace(/\D+/g, '');
        }
    });
}

ValidaCPF.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;

    const cpfParcial = this.cpfLimpo.slice(0, 9);
    const primeiroDigito = this.criaDigito(cpfParcial);
    const segundoDigito = this.criaDigito(cpfParcial + primeiroDigito);
    
    const cpfValidado = cpfParcial + primeiroDigito + segundoDigito;

    if(this.cpfLimpo !== cpfValidado) return false;

    return true
}

ValidaCPF.prototype.criaDigito = function (cpfParcial) {
    let cpfArray = Array.from(cpfParcial);

    let soma = cpfArray.reduce((acumulador, valor, indice) => {
        let multiplicador = (cpfArray.length + 1) - indice;
        return acumulador + (Number(valor) * multiplicador);
    }, 0);

    let digito = 11 - (soma % 11);
    return digito > 9 ? 0 : digito;
}

const resultado = new ValidaCPF('xxx.xxx.xxx-xx'); //Substituir os "x" pelo CPF que sera validado!
console.log(resultado.valida())