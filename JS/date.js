const Aniversario = new Date('2004-02-19 12:43:20.200');
console.log('Dia', Aniversario.getDate());
console.log('Mes', Aniversario.getMonth() + 1);  //Mes comeca no zero
console.log('Ano', Aniversario.getFullYear());
console.log('Hora', Aniversario.getHours());
console.log('Minutos', Aniversario.getMinutes());
console.log('Segundos', Aniversario.getSeconds());
console.log('Ms', Aniversario.getMilliseconds());
console.log('Dia da semana', Aniversario.getDay()); // 0 - Domingo, 6 - Sabado



console.log(Aniversario.toString());

const data = new Date();
const padraoBrasil = formataData(data);
console.log(padraoBrasil)

function formataData(data) {
    const semana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    const diaSemana = data.getDay();

    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg} ${semana[diaSemana]} `
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}
