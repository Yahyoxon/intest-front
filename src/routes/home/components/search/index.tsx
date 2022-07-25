import {
  Button,
  Divider,
  Hidden,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import SearchIcon from 'components/icons/search.icon';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import defImage from 'assets/images/banner.jpg';
import { Paths } from 'config/site-paths';
import { Controller, useForm } from 'react-hook-form';
import { get } from 'lodash';
import axios from 'axios';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import {
  SearchWrapper,
  ResultsWrapper,
  InputWrapper,
  IconWrapper,
  SearchForm,
} from './index.style';

const Search = () => {
  const { t } = useTranslation();
  const [data, setData] = useState([]);
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      search: '',
    },
  });

  const onSubmit = (value: any) => console.log(value);
  const values = watch('search');
  useEffect(() => {
    (async () => {
      const response: any = await axios.get<[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/products?search=${values}&include=file&_l=ru`
      );
      if (values.length > 0) {
        setData(response);
      } else {
        setData([]);
      }
    })();
  }, [values]);
  return (
    <SearchForm {...{ isMobile }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <SearchWrapper>
          <Controller
            name="search"
            control={control}
            render={({ field }) => (
              <InputWrapper placeholder={t('searchPlaceholder')} {...field} />
            )}
          />
          <IconWrapper>
            <SearchIcon />
          </IconWrapper>
          {!isMobile && (
            <Button
              variant="contained"
              type="submit"
              sx={{
                fontWeight: 700,
                fontSize: '18px',
                height: '85%',
                background: '#E2A412',
                padding: '20px 80px',
                marginRight: '8px',
                borderRadius: '4px',
              }}
            >
              Найти
            </Button>
          )}
        </SearchWrapper>
      </form>
      {get(data, 'data.data.length') > 0 && (
        <ResultsWrapper>
          {get(data, 'data.data', []).map((item: any) => (
            <Link
              key={get(item, 'id')}
              href={`${Paths.PRODUCT_DETAIL}${get(item, 'slug')}`}
            >
              <a href="!#">
                <Stack
                  direction="row"
                  width="95%"
                  margin="0 auto"
                  padding="20px 25px"
                  sx={{ ':hover': { background: '#f1f1f1' } }}
                >
                  <Image
                    src={get(item, 'file.thumbnails.normal.src', defImage)}
                    alt=""
                    width="70px"
                    height="70px"
                    objectFit="cover"
                    layout="fixed"
                  />
                  <Stack
                    direction="column"
                    justifyContent="space-between"
                    marginLeft="15px"
                  >
                    <Typography
                      variant="h4"
                      fontSize="18px"
                      fontWeight={600}
                      color="#000"
                      lineHeight="25px"
                      textAlign="left"
                      sx={{
                        [theme.breakpoints.down('md')]: {
                          padding: '0 10px',
                          fontSize: '14px',
                          lineHeight: '18px',
                        },
                      }}
                    >
                      {get(item, 'name', '')}
                    </Typography>
                    <Typography
                      variant="h4"
                      fontSize="18px"
                      fontWeight={600}
                      color="#000"
                      lineHeight="25px"
                      textAlign="left"
                      sx={{
                        opacity: 0.5,
                        [theme.breakpoints.down('md')]: {
                          padding: '0 10px',
                          fontSize: '12px',
                          lineHeight: '16px',
                        },
                      }}
                    >
                      {get(item, 'name', '')}
                    </Typography>
                  </Stack>
                </Stack>
                <Divider
                  variant="fullWidth"
                  orientation="horizontal"
                  sx={{
                    background: '#000',
                    opacity: 0.2,
                    zIndex: 999,
                    width: '95%',
                    margin: '0 auto',
                  }}
                />
              </a>
            </Link>
          ))}
        </ResultsWrapper>
      )}
    </SearchForm>
  );
};

export default Search;
