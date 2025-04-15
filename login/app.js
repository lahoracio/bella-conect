const enviarDados = async (email, senha) => {
    const url = 'https://back-spider.vercel.app/login'; // Endpoint da API

    const dados = {
        "email": email,
        "senha": senha
    };

    try {
        const resposta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        if (!resposta.ok) {
            throw new Error(`Erro: ${resposta.status}`);
        }

        const resultado = await resposta.json(); 
        if (resultado.success) { // Se a resposta da API for "true"
            alert("Login bem-sucedido! Redirecionando...");
            window.location.href = "perfil.html"; // Redireciona para a tela de registro
        } else {
            alert("Erro ao fazer login. Verifique suas credenciais.");
        }
    } catch (erro) {
        console.error("Erro ao enviar dados:", erro);
        alert("Erro na conexão. Tente novamente.");
    }
};

// Captura o evento de submit no formulário
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value;
            const senha = document.getElementById("senha").value;

            if (email && senha) {
                enviarDados(email, senha);
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    } else {
        console.error("Elemento com ID 'loginForm' não encontrado.");
    }
});
