import React, { useState } from 'react';
import {
  AppBar,
  Box,
  Dialog,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { getAllData } from 'services/get/all';
import { useQuery } from 'react-query';
import { get } from 'lodash';
import { useGlobalContext } from 'context/filter';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CancelIcon from '@mui/icons-material/Cancel';

const SidebarFilter = ({
  isMobile,
  openFilter,
  setOpenFilter,
  handleFilterOpen,
}: {
  openFilter: boolean;
  isMobile?: boolean;
  handleFilterOpen?: () => void;
  setOpenFilter: any;
}) => {
  const { setFilterCat } = useGlobalContext();
  const [open, setOpen] = useState(false);

  const { data, isLoading, isFetching, isSuccess } = useQuery(
    'categories',
    () => getAllData('/categories?include=category&_l=ru')
  );

  const handleClick = (index: number) => {
    setFilterCat(index);
    setOpenFilter(!openFilter);
  };
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Stack
      sx={{
        width: '90%',
        maxHeight: isMobile ? '700px' : 'inherit',
        overflowY: isMobile ? 'scroll' : 'visible',
        marginTop: isMobile ? 0 : '30px',
        border: '1px solid #e3e3e3',
        borderRadius: '8px',
        overflow: 'hidden',
      }}
    >
      {isMobile ? (
        <Dialog
          fullScreen
          open={openFilter}
          onClose={handleFilterOpen}
          sx={{ zIndex: 999999999999999 }}
        >
          <AppBar sx={{ position: 'relative' }}>
            <Toolbar>
              <IconButton
                edge="start"
                color="inherit"
                onClick={handleFilterOpen}
                aria-label="close"
              >
                <CancelIcon />{' '}
              </IconButton>
              <Typography
                color="#fff"
                sx={{ ml: 2, flex: 1 }}
                variant="h6"
                component="div"
              >
                Select category
              </Typography>
            </Toolbar>
          </AppBar>
          {isSuccess &&
            get(data, 'data.length') > 0 &&
            get(data, 'data', []).map((item: any) => (
              <List
                key={get(item, 'id')}
                sx={{
                  width: '100%',
                  maxWidth: isMobile ? '100%' : 360,
                  bgcolor: 'background.paper',
                }}
                component="nav"
                aria-labelledby="nested-list-subheader"
              >
                <ListItemButton>
                  <Stack
                    direction="row"
                    width="100%"
                    justifyContent="space-between"
                  >
                    <Box
                      onClick={() => handleClick(get(item, 'id'))}
                      sx={{ width: '80%' }}
                    >
                      <ListItemText primary={get(item, 'name_ru')} />
                    </Box>
                    {get(item, 'category.length') > 0 && (
                      <Box onClick={handleOpen}>
                        {open ? <ExpandLess /> : <ExpandMore />}
                      </Box>
                    )}
                  </Stack>
                </ListItemButton>
                {get(item, 'category').map((subItem: any) => (
                  <Collapse
                    key={get(subItem, 'id')}
                    in={open}
                    timeout="auto"
                    unmountOnExit
                    onClick={() => handleClick(get(subItem, 'id'))}
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
        </Dialog>
      ) : (
        isSuccess &&
        get(data, 'data.length') > 0 &&
        get(data, 'data', []).map((item: any) => (
          <List
            sx={{
              width: '100%',
              maxWidth: isMobile ? '100%' : 360,
              bgcolor: 'background.paper',
            }}
            key={get(item, 'id')}
            component="nav"
            aria-labelledby="nested-list-subheader"
          >
            <ListItemButton>
              <Stack
                direction="row"
                width="100%"
                justifyContent="space-between"
              >
                <Box
                  onClick={() => handleClick(get(item, 'id'))}
                  sx={{ width: '80%' }}
                >
                  <ListItemText primary={get(item, 'name_ru')} />
                </Box>
                {get(item, 'category.length') > 0 && (
                  <Box onClick={handleOpen}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                  </Box>
                )}
              </Stack>
            </ListItemButton>
            {get(item, 'category').map((subItem: any) => (
              <Collapse
                key={get(subItem, 'id')}
                in={open}
                timeout="auto"
                unmountOnExit
                onClick={() => handleClick(get(subItem, 'id'))}
              >
                <List component="div" disablePadding>
                  <ListItemButton sx={{ pl: 4 }}>
                    <ListItemText primary={get(subItem, 'name_ru')} />
                  </ListItemButton>
                </List>
              </Collapse>
            ))}
          </List>
        ))
      )}
    </Stack>
  );
};
export default SidebarFilter;
