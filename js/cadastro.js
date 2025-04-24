'use strict'

const form = document.getElementById('loginForm');

// Pegando os elementos corretamente com base nos IDs únicos
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const senhaInput = document.getElementById('senha');



const senhaRecuperacaoInput = document.getElementById('senhaRecuperacao');

// Criar parágrafo para exibir mensagens de erro
const errorMessage = document.createElement('p');
errorMessage.style.color = 'red';
errorMessage.style.marginTop = '10px';
errorMessage.style.display = 'none';
form.appendChild(errorMessage);

// Evento de envio do formulário
form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const nome = nomeInput.value.trim();
    const email = emailInput.value.trim();
    const senha = senhaInput.value.trim();
    const senhaRecuperacao = senhaRecuperacaoInput.value.trim();
    const premium = "0";
    const imagemPerfil = "https://static.vecteezy.com/ti/vetor-gratis/p1/26434417-padrao-avatar-perfil-icone-do-social-meios-de-comunicacao-do-utilizador-foto-vetor.jpg";

    if (!nome || !email || !senha || !senhaRecuperacao) {
        errorMessage.textContent = 'Preencha todos os campos!';
        errorMessage.style.display = 'block';
        return;
    }

    try {
        const response = await fetch('https://back-spider.vercel.app/user/cadastrarUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nome, email, senha, senhaRecuperacao, premium, imagemPerfil })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.message || 'Erro ao realizar cadastro');
        }

        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));

        // Redireciona após sucesso
        window.location.href = '../indexs/index.html';
    } catch (error) {
        errorMessage.textContent = error.message;
        errorMessage.style.display = 'block';
    }
});
