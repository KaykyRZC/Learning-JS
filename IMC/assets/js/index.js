const form = document.querySelector('.form');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    getValues();
})

function getValues() {
    const peso = document.querySelector('#peso').value;
    const altura = document.querySelector('#altura').value;

    if (/^$/.test(peso) || /^$/.test(altura)) {
        setMessage('vazio');
        return
    }
    if(peso.match(/[A-Za-z]/g) || altura.match(/[A-Za-z]/g)) {
        setMessage('caractere');
        return 
    }
    
    calculateIMC(Number(peso), Number(altura));
}

function calculateIMC(peso, altura){
    let imc = peso / (altura * altura);
    setMessage(imc);
}

function setMessage(imc) {
    const result = document.querySelector('.result');
    result.innerHTML = '';

    const p = document.createElement('p');
    p.innerHTML = messageTabel(p, imc);
    result.appendChild(p);
}

function messageTabel(p, imc){
    if(imc < 18.5) {
        p.classList.add('set-yellow')
        return `Abaixo do peso, IMC: ${imc.toFixed(2)}`
    }
    if(imc >= 18.5 && imc <= 24.9){
        p.classList.add('set-green')
        return `Peso normal, IMC: ${imc.toFixed(2)}`
    }
    if(imc >= 25 && imc <= 29.9){
        p.classList.add('set-yellow')
        return `Sobrepeso, IMC: ${imc.toFixed(2)}`
    }
    if(imc >= 30 && imc <= 34.9){
        p.classList.add('set-red')
        return `Obesidade 1, IMC: ${imc.toFixed(2)}`
    }
    if(imc >= 35 && imc <= 39.9){
        p.classList.add('set-red')
        return `Obesidade 2, IMC: ${imc.toFixed(2)}`
    }
    if(imc >= 40){
        p.classList.add('set-red')
        return `Obesidade 3, IMC: ${imc.toFixed(2)}`
    }
    if(imc === 'vazio'){
        p.classList.add('set-red')
        return 'Existem campos vazios!'
    }
    if(imc === 'caractere'){
        p.classList.add('set-red')
        return 'Caractere invalido!'
    }
}