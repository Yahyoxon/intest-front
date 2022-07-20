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
    links: '#',
  },
  {
    title: 'Категории',
    links: '#',
  },
  {
    title: 'О компании',
    links: '#',
  },
  {
    title: 'Контакты',
    links: '#',
  },
  {
    title: 'Помощь',
    links: '#',
  },
  {
    title: 'Политика конфиденциальности',
    links: '#',
  },
];
export const socialLinks = [
  {
    link: '#',
    Icon: FaceBookIcon,
  },
  {
    link: '#',
    Icon: YouTubeIcon,
  },
  {
    link: '#',
    Icon: TiktokIcon,
  },
  {
    link: '#',
    Icon: TelegramIcon,
  },
  {
    link: '#',
    Icon: InstagramIcon,
  },
];
