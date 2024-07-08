const endPoint = 'https://api.github.com/users/Guibsb90';

fetch(endPoint)
  .then(function(res) {
    if (!res.ok) {
      throw new Error('Network response was not ok ' + res.statusText);
    }
    return res.json();
  })
  .then(function(json) {
    const nameElement = document.querySelector('.profile-name');
    const usernameElement = document.querySelector('.profile-username');
    const avatarElement = document.querySelector('.profile-avatar');
    const reposElement = document.querySelector('#numeroRepositorios');
    const followersElement = document.querySelector('#numeroSeguidores');
    const followingElement = document.querySelector('#numeroSeguindo');
    const linkElement = document.querySelector('.profile-link');

    nameElement.innerText = json.name;
    usernameElement.innerText = json.login;
    avatarElement.src = json.avatar_url;
    followingElement.innerText = json.following;
    followersElement.innerText = json.followers;
    reposElement.innerText = json.public_repos;
    linkElement.href = json.html_url;
  })
  .catch(function(error) {
    alert("Ocorreu um erro ao buscar o endereço.");
    console.error('Erro:', error);
  });