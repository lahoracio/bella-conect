document.addEventListener("DOMContentLoaded", () => {
    const feed = document.getElementById("pinterestFeed");

    async function carregarPins() {
      try {
        const resposta = await fetch('https://back-spider.vercel.app/publicacoes/listarPublicacoes');
        if (!resposta.ok) throw new Error('Erro ao buscar publicações');

        const publicacoes = await resposta.json();
        if (!Array.isArray(publicacoes)) throw new Error("Resposta inesperada da API");

        feed.innerHTML = '';

        publicacoes.forEach(post => {
          if (!post.imagem) return;

          const card = document.createElement("div");
          card.classList.add("pinterest-card");

          card.innerHTML = `
            <div class="card-header">
              <img src="https://via.placeholder.com/30" class="logo" alt="Logo"> 
              <span class="user">Usuário</span>
            </div>

            <img src="${post.imagem}" alt="Imagem do post" class="post-img">

            <div class="actions">
              <div>
                <i class="like-btn">❤️</i>
                <i>💬</i>
                <i>📤</i>
              </div>
              <div>🔖</div>
            </div>

            <div class="desc">
              <strong>1</strong> ${post.descricao || 'Sem descrição'}
            </div>

            <div class="comments">Ver todos os comentários</div>
            <div class="date">30/10/2024</div>

            <div class="comment-box">
              <input type="text" placeholder="Adicione um comentário...">
              <button>Publicar</button>
            </div>
          `;

          const likeBtn = card.querySelector(".like-btn");
          likeBtn.addEventListener("click", () => {
            likeBtn.classList.toggle("liked");
          });

          feed.appendChild(card);
        });
      } catch (err) {
        console.error('Erro ao carregar pins:', err);
        feed.innerHTML = "<p>Erro ao carregar imagens 😢</p>";
      }
    }

    carregarPins();
  });