import React from 'react';

const socials = [
  {
    icon: 'fa fa-linkedin-square',
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/kevin-saephanh',
  },
  {
    icon: 'fa fa-github-square',
    title: 'Github',
    link: 'https://github.com/KevinSaephanh',
  },
  {
    icon: 'fab fa-discord',
    title: 'Discord',
    link: 'https://www.discord.com/users/360657658270973956',
  },
];

const Footer: React.FC = () => {
  // Make icon move up
  const jump = (icon) => {
    const socialIcon: any = document.getElementsByClassName(icon)[0];
    socialIcon.style.transform = 'translateY(-5px)';
  };

  // Make icon drop back down to original position
  const drop = (icon) => {
    const socialIcon: any = document.getElementsByClassName(icon)[0];
    socialIcon.style.transform = 'none';
  };

  return (
    <footer>
      <div>
        {socials.map((social, key) => {
          return (
            <a href={social.link} key={key}>
              <i
                className={social.icon}
                title={social.title}
                key={key}
                aria-hidden="true"
                onMouseEnter={() => jump(social.icon)}
                onMouseLeave={() => drop(social.icon)}
              />
            </a>
          );
        })}
      </div>
      <span>Designed and built by me, Kevin Saephanh</span>
    </footer>
  );
};

export default Footer;
