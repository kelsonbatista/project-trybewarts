const botaoEntrar = document.querySelector('#btn');
const inputEmail = document.querySelector('#input-login-email');
const inputSenha = document.querySelector('#input-login-senha');
const inputCheckBox = document.querySelector('#agreement');
const botaoEnviar = document.querySelector('#submit-btn');
const contador = document.querySelector('#counter');
const textarea = document.querySelector('#textarea');
contador.innerText = 500;

botaoEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

inputCheckBox.addEventListener('change', (event) => {
  if (event.target.checked) {
    botaoEnviar.disabled = false;
  } else {
    botaoEnviar.disabled = true;
  }
}, false);

textarea.addEventListener('input', () => {
  const conta = 500 - textarea.value.length;
  contador.innerText = conta;
});
