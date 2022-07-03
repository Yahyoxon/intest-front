import { Box } from '@mui/material';
import SearchIcon from 'components/icons/search.icon';
import { Paths } from 'config/site-paths';
import { COLORS } from 'config/styles-config';
import { useRouter } from 'next/router';
import React from 'react';
import { Categories } from '../categories';
import { CustomInput, SearchFieldWrapper } from './search-field.styles';

const SearchField = () => {
  const router = useRouter();
  const handleSearchFieldClick = () => {
    if (router.pathname === '/filter') return;
    router.push(Paths.FILTER);
  };
  return (
    <SearchFieldWrapper>
      <Categories />
      <CustomInput
        onClick={handleSearchFieldClick}
        placeholder="Қидириш"
        endAdornment={
          <Box
            sx={{
              borderLeft: `1px solid ${COLORS.border}`,
              padding: '0 1.25rem',
              display: 'flex',
              cursor: 'pointer',
              height: '3rem',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SearchIcon />
          </Box>
        }
      />
    </SearchFieldWrapper>
  );
};

export default SearchField;
