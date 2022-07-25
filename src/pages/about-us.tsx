import { Container, Typography, useMediaQuery, useTheme } from '@mui/material';
import PageBreadcrumb from 'components/breadcrumb';
import Main from 'layouts/main';
import React from 'react';
import BePartner from 'routes/home/components/bePartner';

const AboutUs = () => {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));
  const breadCrumbData = [{ title: 'О компании', link: '/about-us' }];
  return (
    <Main>
      <Container maxWidth="lg">
        <PageBreadcrumb pageData={breadCrumbData} />
        <Typography
          variant="h1"
          fontSize={isMobile ? '28px' : '40px'}
          fontWeight={600}
          color="#183B56"
          lineHeight={isMobile ? '42px' : '48px'}
        >
          О компании
        </Typography>
        <Typography
          marginTop="28px"
          variant="body1"
          fontSize={isMobile ? '28px' : '20px'}
          fontWeight={400}
          color="#183B56"
          lineHeight={isMobile ? '42px' : '35px'}
        >
          <p>
            Наша компания уже много лет занимается продажей, установкой и
            ремонтом лабораторного оборудования и приборов. Мы работаем в
            сотрудничестве с компаниями крупных стран, таких как Италия, Китай,
            Германия, Турция, Россия, Литва, и это дает нам уверенность в
            качестве нашей продукции. Мы готовы предоставить Вам
            высококачественное лабораторное оборудование и приборов. Наши цены
            относительно низкие, а качество отличное.
          </p>
          <p>
            Гарантия на каждый товар 1 год. При этом установка и обучение
            абсолютно бесплатны. Еще одним удобством работы с нами является то,
            что вы можете купить необходимый товар через биржу. У нас есть
            экспортные услуги для наших зарубежных клиентов, и все основано на
            правилах внешней торговли. Наша компания всегда старается дать самую
            низкую цену.{' '}
            <p>
              Здесь мы получаем небольшую прибыль, но успеха добиваемся за счет
              долгосрочного сотрудничества, что приводит к увеличению объема
              продаж. Наша цель - качество и долгосрочное сотрудничество.
            </p>
          </p>
        </Typography>
      </Container>
      <BePartner />
    </Main>
  );
};

export default AboutUs;
