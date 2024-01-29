let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio';

function msgConsole() {
    console.log('O botão foi clicado');
}

function msgAlert() {
    alert('Eu amo JS');
}

function msgPrompt() { //ao escrever um cidade no prompt e dar enter, vai dar um alerta coma msg
    let nomeCidade = prompt('De o nome de uma cidade do Brasil:');
    alert(`Estive em ${nomeCidade} e lembrei de você!`);
}

function somandoDoisNum() {
    let primeiroNum = parseInt(prompt('Digite o primeiro número:'));
    let segundoNum = parseInt(prompt('Digite o segundo número:'));
    let resultado = primeiroNum + segundoNum;
    alert(`${primeiroNum} + ${segundoNum} = ${resultado}`);
}