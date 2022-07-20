import { Button, Container, Divider, Stack, Typography } from '@mui/material';
import LogoLightIcon from 'components/icons/logo-light.icon';
import Link from 'next/link';
import React from 'react';
import { footerLinks, socialLinks } from './footer-links';
import { FooterWrapper, LogoWrapper, SocialWrapper } from './footer.styles';

const Footer = () => (
  <FooterWrapper>
    <Container maxWidth="xl">
      <LogoWrapper>
        <LogoLightIcon />
      </LogoWrapper>
      <Stack
        direction="row"
        justifyContent="space-evenly"
        marginTop="25px"
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: { flexDirection: 'column' },
        })}
      >
        {footerLinks.map((link) => (
          <Link key={link.title} href={`/${link.links}`} passHref>
            <Button variant="text" sx={{ color: '#fff', fontSize: '16px' }}>
              {link.title}
            </Button>
          </Link>
        ))}
      </Stack>
      <Divider
        variant="fullWidth"
        orientation="horizontal"
        sx={{ background: '#fff', opacity: 0.2, marginTop: '35px' }}
      />
      <Stack
        direction="row"
        justifyContent="space-between"
        marginTop="25px"
        sx={(theme) => ({
          [theme.breakpoints.down('md')]: { flexDirection: 'column' },
        })}
      >
        <Typography variant="body1" color="#D9DBE1">
          © 2022 Intest. Все права защищены
        </Typography>
        <Stack direction="row">
          {socialLinks.map((social) => (
            <SocialWrapper href={social.link} key={social.toString()}>
              <social.Icon />
            </SocialWrapper>
          ))}
        </Stack>
      </Stack>
    </Container>
  </FooterWrapper>
);

export default Footer;
