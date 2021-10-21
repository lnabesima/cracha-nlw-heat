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

    li.children[0].href = `https://${social}.com/${userSocialMedia[social]}`
  }
}

changeSocialMediaLinks();
