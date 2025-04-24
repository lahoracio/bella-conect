'use strict'

// Seleciona a seção de perfil
const profileSection = document.querySelector('.profile-section');

// Cria o cabeçalho do perfil
const profileHeader = document.createElement('div');
profileHeader.className = 'profile-header';
profileSection.appendChild(profileHeader);

// Cria a imagem de perfil
const profileImage = document.createElement('img');
profileImage.className = 'profile-image';
profileImage.src = "https://static.vecteezy.com/ti/vetor-gratis/p1/26434417-padrao-avatar-perfil-icone-do-social-meios-de-comunicacao-do-utilizador-foto-vetor.jpg";
profileImage.alt = "Imagem de perfil";
profileHeader.appendChild(profileImage);

// Cria o nome de usuário
const username = document.createElement('div');
username.className = 'username';
username.textContent = 'laraa_horacio';
profileHeader.appendChild(username);

// Cria o botão "Editar perfil"
const editBtn = document.createElement('button');
editBtn.className = 'edit-btn';
editBtn.textContent = 'Editar perfil';
profileHeader.appendChild(editBtn);

// Cria o botão "Itens Arquivados"
const archiveBtn = document.createElement('button');
archiveBtn.className = 'archive-btn';
archiveBtn.textContent = 'Itens Arquivados';
profileHeader.appendChild(archiveBtn);

// Cria as estatísticas
const stats = document.createElement('div');
stats.className = 'stats';

// Publicações
const postsStat = document.createElement('div');
postsStat.className = 'stat';
const postsValue = document.createElement('div');
postsValue.className = 'stat-value';
postsValue.textContent = '0';
const postsLabel = document.createElement('div');
postsLabel.className = 'stat-label';
postsLabel.textContent = 'publicações';
postsStat.appendChild(postsValue);
postsStat.appendChild(postsLabel);
stats.appendChild(postsStat);

// Seguidores
const followersStat = document.createElement('div');
followersStat.className = 'stat';
const followersValue = document.createElement('div');
followersValue.className = 'stat-value';
followersValue.textContent = '602';
const followersLabel = document.createElement('div');
followersLabel.className = 'stat-label';
followersLabel.textContent = 'seguidores';
followersStat.appendChild(followersValue);
followersStat.appendChild(followersLabel);
stats.appendChild(followersStat);

// Seguindo
const followingStat = document.createElement('div');
followingStat.className = 'stat';
const followingValue = document.createElement('div');
followingValue.className = 'stat-value';
followingValue.textContent = '451';
const followingLabel = document.createElement('div');
followingLabel.className = 'stat-label';
followingLabel.textContent = 'seguindo';
followingStat.appendChild(followingValue);
followingStat.appendChild(followingLabel);
stats.appendChild(followingStat);

profileHeader.appendChild(stats);

// Cria a bio
const bio = document.createElement('div');
bio.className = 'bio';
bio.innerHTML = `
    <strong>lara</strong><br>
    a paz é inegociável. ♡
`;
profileSection.appendChild(bio);

// Cria o link
const profileLink = document.createElement('a');
profileLink.href = 'https://vsco.co/laamchdo';
profileLink.textContent = 'vsco.co/laamchdo';
profileLink.target = '_blank';
profileLink.className = 'profile-link';
profileSection.appendChild(profileLink);

// Cria o aviso "Compartilhar fotos"
const photoSection = document.createElement('div');
photoSection.className = 'photo-section';

const shareTitle = document.createElement('h2');
shareTitle.textContent = 'Compartilhar fotos';
photoSection.appendChild(shareTitle);

const shareText = document.createElement('p');
shareText.textContent = 'Quando você compartilhar fotos, elas aparecerão no seu perfil.';
photoSection.appendChild(shareText);

const shareLink = document.createElement('a');
shareLink.href = '#';
shareLink.textContent = 'Compartilhar sua primeira foto';
shareLink.className = 'share-link';
photoSection.appendChild(shareLink);

profileSection.appendChild(photoSection);