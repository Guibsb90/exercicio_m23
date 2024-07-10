const endPoint = 'https://api.github.com/users/Guibsb90';

$.ajax({
  url: endPoint,
  method: 'GET'
}).done(function(resposta) {
  const nameElement = document.querySelector('.profile-name');
  const usernameElement = document.querySelector('.profile-username');
  const avatarElement = document.querySelector('.profile-avatar');
  const reposElement = document.querySelector('#numeroRepositorios');
  const followersElement = document.querySelector('#numeroSeguidores');
  const followingElement = document.querySelector('#numeroSeguindo');
  const linkElement = document.querySelector('.profile-link');

  nameElement.innerText = resposta.name;
  usernameElement.innerText = resposta.login;
  avatarElement.src = resposta.avatar_url;
  followingElement.innerText = resposta.following;
  followersElement.innerText = resposta.followers;
  reposElement.innerText = resposta.public_repos;
  linkElement.href = resposta.html_url;
}).fail(function(errorThrown) {
  alert("Ocorreu um erro ao buscar o endereço.");
  console.error('Erro:', errorThrown);
}).always(function() {
  console.log('Requisição finalizada.');
});
