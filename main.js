const endPoint = 'https://api.github.com/users/Guibsb90' ;

$.ajax(endPoint).done(function(resposta){
  const nameElement = document.querySelector('.profile-name');
  const usernameElement = document.querySelector('.profile-username');
  const avatarElement = document.querySelector('.profile-avatar');
  const reposElement = document.querySelector('#numeroRepositorios');
  const followersElement = document.querySelector('#numeroSeguidores');
  const followingElement = document.querySelector('#numeroSeguindo');
  const linkelement = document.querySelector('.profile-link');

  fetch('https://api.github.com/users/Guibsb90').then(function(res){
    return res.json();
  })
  .then(function(json){
    nameElement.innerText = json.name;
    usernameElement.innerText = json.login;
    avatarElement.src = json.avatar_url;
    followingElement.innerText = json.following;
    followersElement.innerText = json.followers;
    reposElement.innerText = json.public_repos;
    linkelement.href = json.html_url;

  })
})