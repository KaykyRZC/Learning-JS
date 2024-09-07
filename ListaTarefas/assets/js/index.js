const inputTarefa = document.querySelector('.input-tarefas');
const btnAddTarefa = document.querySelector('.btn-add-tarefas');
const tarefas = document.querySelector('.tarefas');

function criarTarefa(inputTexto) {
    const li = document.createElement('li');
    li.innerHTML = inputTexto;
    tarefas.appendChild(li);
    criarBotaoApagar(li);
    limpaInput();
    salvarTarefas();
}

function criarBotaoApagar(li){
    li.innerHTML += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerHTML = 'Apagar';
    botaoApagar.classList.add('apagar')
    li.appendChild(botaoApagar);
}

function limpaInput() {
    inputTarefa.value = '';
    inputTarefa.focus();
}

function salvarTarefas() {
    const liTarefas = tarefas.querySelectorAll('li');
    const listaTarefas = [];

    for (let tarefa of liTarefas) {
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function adicionaTarefasSalvas(){
    let tarefas = localStorage.getItem('tarefas');
    tarefas = JSON.parse(tarefas);

    for (let tarefa of tarefas) {
        criarTarefa(tarefa);
    }
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('btn-add-tarefas')){
        if(!inputTarefa.value) return;
        criarTarefa(inputTarefa.value);
    }

    if(el.classList.contains('apagar')){
        el.parentElement.remove();
        salvarTarefas();
    }

})

inputTarefa.addEventListener('keypress', function(e){
    e.keyCode === 13 && inputTarefa.value ? criarTarefa(inputTarefa.value) : NaN;
})

adicionaTarefasSalvas();
