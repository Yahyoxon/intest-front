import React, { useState } from 'react';
import { Box } from '@mui/material';
import { getAllData } from 'services/get/all';
import { useQuery } from 'react-query';
import { get } from 'lodash';
import { useGlobalContext } from 'context/filter';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

const SidebarFilter = () => {
  const { setFilterCat } = useGlobalContext();
  const [openIndex, setOpenIndex] = useState<number>();

  const handleClick = (index: number) => {
    setOpenIndex(index);
  };
  const { data, isLoading, isFetching, isSuccess } = useQuery(
    'categories',
    () => getAllData('/categories?include=category&_l=ru')
  );
  const filtered = get(data, 'data', []).filter(
    (item: any) => get(item, 'category.length') > 0
  );
  const handleFilter = (cat: any) => {
    setFilterCat(cat.id);
  };
  return (
    <Box sx={{ width: '90%', marginTop: '30px' }}>
      {isSuccess &&
        get(data, 'data', []).map((item: any) => (
          <List
            key={get(item, 'id')}
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton onClick={() => handleClick(get(item, 'id'))}>
              <ListItemText primary={get(item, 'name_ru')} />
              {openIndex === get(item, 'id') ? <span /> : <span />}
            </ListItemButton>
            {get(item, 'category').map((subItem: any) => (
              <Collapse
                key={get(subItem, 'id')}
                in={openIndex === get(item, 'id')}
                timeout="auto"
                unmountOnExit
              >
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={get(subItem, 'name_ru')} />
                  </ListItemButton>
                </List>
              </Collapse>
            ))}
          </List>
        ))}
    </Box>
  );
};
export default SidebarFilter;
