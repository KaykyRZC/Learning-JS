setInterval(pegaData, 1000)

function pegaData(){
    const data = new Date();
    formataData(data);

}
function formataData(data) {
    const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    const semana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado'];

    const dia = data.getDate();
    const mes = data.getMonth();
    const ano = data.getFullYear();
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const diaSemana = data.getDay();

    setData(`${semana[diaSemana]}, ${dia} de ${meses[mes]} de ${ano} <br> ${hora}:${min}`);
}

function zeroAEsquerda(num) {
    return num >= 10 ? num : `0${num}`;
}

function setData(data) {
    const texto = document.querySelector('.data');
    texto.innerHTML = data;
}

/*
Forma reduzida do codigo

const texto = document.querySelector('.data');
const data = new Date();
texto.innerHTML = data.toLocaleString('pt-BR', { dateStyle: 'full' , timeStyle: 'short' });
*/

