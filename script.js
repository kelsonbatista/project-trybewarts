const botaoEntrar = document.querySelector('#btn');
const inputEmail = document.querySelector('#input-email');
const inputSenha = document.querySelector('#input-senha');

botaoEntrar.addEventListener('click', (event) => {
  event.preventDefault();
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});
