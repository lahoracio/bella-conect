const enviarCadastro = async (nome, email, senha) => {
    const url = 'https://back-spider.vercel.app/user/cadastrarUser';

    const dados = {
        nome: nome,
        email: email,
        senha: senha,
        imagemPerfil: "https://i.pravatar.cc/150?img=3", // imagem default
        premium: true // precisa ser booleano, não string
    };

    console.log("Enviando dados para API:", JSON.stringify(dados));

    try {
        const resposta = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        const resultado = await resposta.json();
        console.log("Resposta da API:", resultado);

        if (resposta.ok && resultado.success !== false) {
            alert("Cadastro realizado com sucesso!");
            window.location.href = "index.html"; // redireciona para login
        } else {
            // exibe mensagem de erro da API se houver
            const msg = resultado.message || "Erro desconhecido ao cadastrar.";
            alert("Erro ao cadastrar: " + msg);
        }
    } catch (erro) {
        console.error("Erro ao enviar dados:", erro);
        alert("Erro na conexão. Tente novamente.");
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("loginForm");

    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            const nome = document.getElementById("nome").value.trim();
            const email = document.getElementById("email").value.trim();
            const senha = document.getElementById("senha").value;

            console.log("Nome:", nome);
            console.log("Email:", email);
            console.log("Senha:", senha);

            if (nome && email && senha) {
                enviarCadastro(nome, email, senha);
            } else {
                alert("Por favor, preencha todos os campos.");
            }
        });
    }
});
