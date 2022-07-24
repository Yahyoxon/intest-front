import FaceBookIcon from 'components/icons/facebook.icon';
import InstagramIcon from 'components/icons/instagram.icon';
import TelegramIcon from 'components/icons/telegram.icon';
import TiktokIcon from 'components/icons/tik-tok.icon';
import YouTubeIcon from 'components/icons/yout-tube.icon';

interface FooterLinks {
  title: string;
  links: string;
}

export const footerLinks: FooterLinks[] = [
  {
    title: 'Товары',
    links: 'filter',
  },
  {
    title: 'О компании',
    links: 'about-us',
  },
  {
    title: 'Контакты',
    links: 'contacts',
  },
];
export const socialLinks = [
  {
    link: '#w',
    Icon: FaceBookIcon,
  },
  {
    link: '#e',
    Icon: YouTubeIcon,
  },
  {
    link: '#3',
    Icon: TiktokIcon,
  },
  {
    link: '#r',
    Icon: TelegramIcon,
  },
  {
    link: '#t',
    Icon: InstagramIcon,
  },
];
