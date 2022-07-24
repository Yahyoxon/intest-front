import {
  Button,
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import Image from 'next/image';
import React from 'react';
import partnersImg from 'assets/images/partners.jpg';
import MailIcon from 'components/icons/mail.icon';
import {
  FormWrapper,
  InputStyled,
  InputWrapper,
  InputChildWrapper,
  InputChildWrapperImage,
} from './index.type';

const BePartner = () => {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));
  return (
    <FormWrapper>
      <Container
        maxWidth="lg"
        sx={{ padding: isMobile ? '0 0 70px' : '125px 0' }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            [theme.breakpoints.down('md')]: { flexDirection: 'column' },
          }}
        >
          <Image src={partnersImg} alt="partners" />
          <Stack
            width="50%"
            justifyContent="center"
            sx={{
              [theme.breakpoints.down('md')]: {
                width: '100%',
                boxSizing: 'border-box',
                padding: '0 10px',
              },
            }}
          >
            <Typography
              variant="h2"
              fontSize="54px"
              fontWeight={600}
              color="#fff"
              lineHeight="62px"
              textAlign="left"
              sx={{
                [theme.breakpoints.down('md')]: {
                  fontSize: '32px',
                  marginTop: 4,
                },
              }}
            >
              Стать партнером
            </Typography>
            <Typography
              variant="subtitle1"
              fontSize="18px"
              fontWeight={400}
              color="rgba(255, 255, 255, 0.7)"
              lineHeight="30px"
              textAlign="left"
              margin="50px auto"
              sx={{
                [theme.breakpoints.down('md')]: {
                  fontSize: '16px',
                  margin: '20px 0',
                },
              }}
            >
              Create custom landing pages with Omega that converts more visitors
              than any website. With lots of unique blocks, you can easily build
              a page
            </Typography>
            <InputWrapper>
              <InputChildWrapper>
                <InputChildWrapperImage>
                  <MailIcon />
                </InputChildWrapperImage>
                <InputStyled placeholder="Ваш e-mail" />
              </InputChildWrapper>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: '#FAAD13',
                  borderRadius: '6px',
                  padding: '18px 22px',
                  [theme.breakpoints.down('md')]: {
                    fontSize: '14px!important',
                    fontWeight: 400,
                  },
                }}
              >
                Отправить
              </Button>
            </InputWrapper>
          </Stack>
        </Stack>
      </Container>
    </FormWrapper>
  );
};

export default BePartner;
