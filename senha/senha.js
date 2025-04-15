let codigoGerado = "";

function enviarCodigo() {
    const userInput = document.getElementById('userInput').value.trim();

    if (userInput === "") {
        alert("Por favor, insira um email, telefone ou nome de usuário.");
        return;
    }

    // Gera um código de 6 dígitos
    codigoGerado = Math.floor(100000 + Math.random() * 900000).toString();

    // Mostra o código (simulando envio por email)
    alert(`Seu código de verificação é: ${codigoGerado}`);

    // Atualiza o texto e exibe o formulário de nova senha
    document.getElementById("descricao").textContent = "Digite o código recebido e sua nova senha.";
    document.getElementById("userInput").style.display = "none";
    document.getElementById("btnEnviar").style.display = "none";
    document.getElementById("novaSenhaForm").style.display = "block";
}

function redefinirSenha() {
    const codigoDigitado = document.getElementById('codigoInput').value.trim();
    const novaSenha = document.getElementById('novaSenha').value.trim();

    if (codigoDigitado === "" || novaSenha === "") {
        alert("Preencha todos os campos.");
        return;
    }

    if (codigoDigitado === codigoGerado) {
        alert("Senha redefinida com sucesso!");
        window.location.href = "index.html"; // Redireciona pra tela de login
    } else {
        alert("Código incorreto. Verifique e tente novamente.");
    }
}
