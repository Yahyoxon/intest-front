import FaceBookIcon from 'components/icons/facebook.icon';
import InstagramIcon from 'components/icons/instagram.icon';
import TelegramIcon from 'components/icons/telegram.icon';
import TiktokIcon from 'components/icons/tik-tok.icon';
import YouTubeIcon from 'components/icons/yout-tube.icon';
import PlayStore from 'assets/png/googleplay.png';
import AppStore from 'assets/png/appstore.png';

interface FooterLinks {
    title: string;
    links: {
        label?: string;
        href: string;
        img?: StaticImageData | string
    }[]
}

const footerLinks: FooterLinks[] = [
  {
    title: 'Платформа хақида',
    links: [
      {
        label: 'Liber ўзи нима?',
        href: '#',
      },
      {
        label: 'Фойдаланиш шартлари',
        href: '#',
      },
      {
        label: 'Ёрдам',
        href: '#',
      },
    ],
  },
  {
    title: 'Обуна хақида',
    links: [
      {
        label: 'Обуна бўлиш',
        href: '#',
      },
      {
        label: 'Қандай тўлаш',
        href: '#',
      },
    ],
  },
  {
    title: 'Китоблар',
    links: [
      {
        label: 'Аудио китоблар',
        href: '#',
      },
      {
        label: 'Электрон китоблар',
        href: '#',
      },
      {
        label: 'Китоблар',
        href: '#',
      },
    ],
  },
  {
    title: 'Мобил илова',
    links: [
      {
        img: PlayStore,
        href: '#',
      },
      {
        img: AppStore,
        href: '#',
      },
    ],
  },
];

export const socialLins = [
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

export default footerLinks;
