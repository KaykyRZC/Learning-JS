function createSeconds(sec) {
    const data = new Date(sec * 1000);
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'UTC'
    });
}


const relogio = document.querySelector('.timer');
const iniciar = document.querySelector('.iniciar');
const pausar = document.querySelector('.pausar');
const zerar = document.querySelector('.zerar');
let segundos = 0;
let timer;

function iniciaRelogio() {
    timer = setInterval(function() {
        segundos++;
        relogio.innerHTML = createSeconds(segundos);
    }, 1000)
}

document.addEventListener('click', function(e) {
    const el = e.target;

    if(el.classList.contains('iniciar')) {
        iniciaRelogio()
        relogio.classList.remove('pause')
    }

    if(el.classList.contains('pausar')) {
        clearTimeout(timer);
        relogio.classList.add('pause');
    }

    if(el.classList.contains('zerar')) {
        clearTimeout(timer);
        relogio.innerHTML = '00:00:00';
        segundos = 0;
        relogio.classList.remove('pause')
    }
})