import { Box, Container, Pagination, Stack, Typography } from '@mui/material';
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
  const [isGrid, setIsGrid] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const { filterCat, setFilterCat } = useGlobalContext();
  const { query } = useRouter();
  const { data, isLoading, isFetching, isSuccess } = useQuery(
    ['products', { currentPage, filterCat }],
    () =>
      getAllData(
        `/products?include=file,categories&page=${currentPage}&per_page=15&category_id=${filterCat}&_l=ru`
      )
  );
  useEffect(() => {
    if (query) setFilterCat(Object.keys(query)[0]);
  }, [query]);
  return (
    <Container maxWidth="xl" sx={{ padding: '40px 0' }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography
          variant="h1"
          fontSize="38px"
          fontWeight={600}
          color="#183B56"
          lineHeight="52px"
        >
          Результаты по поиску
        </Typography>
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
      {!isFetching && isSuccess && (
        <Stack direction="row">
          <Box sx={{ width: '30%' }}>
            <SidebarFilter />
          </Box>
          <Products {...{ data, isGrid }} />
        </Stack>
      )}
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
    </Container>
  );
};

export default FilterRoute;
