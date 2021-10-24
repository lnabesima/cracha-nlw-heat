const userSocialMedia = {
  github: 'lnabesima',
  youtube: 'channel/UCq7XEjP9khYUdm2a-DWLChQ',
  facebook: 'lucas.nabesima',
  instagram: 'lucasnabesima',
  twitter: 'lucasnabesima',
};

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class');

    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`;
  }
}

function getGithubProfileInfo() {
  const url = `https://api.github.com/users/${userSocialMedia.github}`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name;
      userLink.href = data.html_url;
      userBio.textContent = data.bio;
      userAvatar.src = data.avatar_url;
      userLogin.textContent = data.login;
    });
}

changeSocialMediaLinks();
getGithubProfileInfo();
