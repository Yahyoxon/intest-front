import TuneIcon from '@mui/icons-material/Tune';
import {
  Box,
  Button,
  Container,
  Modal,
  Pagination,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import PageBreadcrumb from 'components/breadcrumb';
import GridIcon from 'components/icons/grid.icon';
import ListsIcon from 'components/icons/lists.icon';
import { useGlobalContext } from 'context/filter';
import { get } from 'lodash';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { getAllData } from 'services/get/all';
import Products from './components/products';
import SidebarFilter from './components/sidebar-filter';

const FilterRoute = () => {
  const { locale } = useRouter();
  const [isGrid, setIsGrid] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [openFilter, setOpenFilter] = useState(false);
  const { filterCat, setFilterCat } = useGlobalContext();
  const { query } = useRouter();
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));
  const { data, isFetching, isSuccess } = useQuery(
    ['products', { currentPage, filterCat }],
    () =>
      getAllData(
        `/products?include=file,categories&page=${currentPage}&per_page=15&category_id=${
          filterCat || ''
        }&_l=${locale}}`
      )
  );
  useEffect(() => {
    if (query) setFilterCat(Object.keys(query)[0]);
  }, [query]);

  const handleFilterOpen = () => {
    setOpenFilter(!openFilter);
  };

  return (
    <Container maxWidth="xl">
      <PageBreadcrumb pageData={[{ title: 'Фильтр', link: '/about-us' }]} />
      <Stack
        direction={isMobile ? 'column' : 'row'}
        justifyContent="space-between"
        sx={{ padding: isMobile ? '40px 10px' : '40px 0' }}
      >
        <Typography
          variant="h1"
          fontSize="38px"
          fontWeight={600}
          color="#183B56"
          lineHeight="52px"
          sx={{
            [theme.breakpoints.down('md')]: {
              fontSize: '24px',
              lineHeight: '32px',
            },
          }}
        >
          Результаты по филтру
        </Typography>
        {isMobile ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            marginTop="20px"
          >
            <Box sx={{ width: '70%' }}>
              <Button
                variant="outlined"
                fullWidth
                sx={{ borderRadius: '4px', height: '40px' }}
                onClick={handleFilterOpen}
              >
                <TuneIcon /> Filter
              </Button>
            </Box>

            <Stack
              direction="row"
              sx={{
                border: '1px solid #ACACAC',
                borderRadius: '4px',
                padding: 0,
                alignItems: 'center',
                justifyContent: 'center',
                height: '38px',
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  background: isGrid ? '#FAAD13' : 'transparent',
                  padding: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => setIsGrid(true)}
              >
                <GridIcon {...{ isGrid }} />
              </Box>
              <Box
                sx={{
                  background: !isGrid ? '#FAAD13' : 'transparent',
                  padding: '10px',
                  cursor: 'pointer',
                }}
                onClick={() => setIsGrid(false)}
              >
                <ListsIcon {...{ isGrid }} />
              </Box>
            </Stack>
          </Stack>
        ) : (
          <Stack
            direction="row"
            sx={{
              border: '1px solid #ACACAC',
              borderRadius: '4px',
              padding: 0,
              alignItems: 'center',
              justifyContent: 'center',
              height: '38px',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                background: isGrid ? '#FAAD13' : 'transparent',
                padding: '10px',
                cursor: 'pointer',
              }}
              onClick={() => setIsGrid(true)}
            >
              <GridIcon {...{ isGrid }} />
            </Box>
            <Box
              sx={{
                background: !isGrid ? '#FAAD13' : 'transparent',
                padding: '10px',
                cursor: 'pointer',
              }}
              onClick={() => setIsGrid(false)}
            >
              <ListsIcon {...{ isGrid }} />
            </Box>
          </Stack>
        )}
      </Stack>
      <Stack direction={isMobile ? 'column' : 'row'}>
        <Box sx={{ width: isMobile ? 0 : '30%' }}>
          <SidebarFilter
            {...{ isMobile, handleFilterOpen, openFilter, setOpenFilter }}
          />
        </Box>
        <Products {...{ data, isGrid, isFetching, isSuccess, isMobile }} />
      </Stack>
      {get(data, 'last_page') > 1 && (
        <Stack sx={{ alignItems: 'flex-end' }}>
          <Stack spacing={2}>
            <Pagination
              count={get(data, 'last_page')}
              variant="outlined"
              shape="rounded"
              size="large"
              onChange={(event, page: number) => setCurrentPage(page)}
            />
          </Stack>
        </Stack>
      )}
    </Container>
  );
};

export default FilterRoute;
