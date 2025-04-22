'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const nextButton = document.getElementById('nextButton');

  async function putPassword(senha, idUser) {
    const dados = {
      senha: senha,
      idUser: idUser
    };
    
    try {
      const response = await fetch(`https://back-spider.vercel.app/user/newPassword/${idUser}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
      });

      if (!response.ok) {
        throw new Error('Erro ao atualizar a senha');
      }

      return await response.json();
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  nextButton.addEventListener('click', async function() {
    const digiteSenhaInput = document.getElementById('digiteSenha').value;
    const confirmarSenhaInput = document.getElementById('confirmarSenha').value;
    const id = localStorage.getItem('idUser');

    if (digiteSenhaInput.length < 4) {
      alert('A senha deve ter no mínimo 4 caracteres.');
      return;
    }

    if (digiteSenhaInput !== confirmarSenhaInput) {
      alert('Senhas precisam ser iguais.');
      return;
    }

    const resposta = await putPassword(digiteSenhaInput, id);
    if (resposta) {
      alert('Senha atualizada com sucesso!');
      window.location.href = '../login/index.html';
    } else {
      alert('Erro ao atualizar a senha.');
    }
  });
});