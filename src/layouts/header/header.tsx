import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@mui/material';
import LogoIcon from 'components/icons/logo.icon';
import MenuIcon from 'components/icons/menu.icon';
import { Paths } from 'config/site-paths';
import Link from 'next/link';
import React from 'react';
import { LanguageChanger } from './components/language-changer';

const pages = [
  { label: 'Товары', url: Paths.FILTER },
  { label: 'О компании', url: Paths.FILTER },
  { label: 'Контакты', url: Paths.FILTER },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: '#fff', padding: '10px 0' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
          <Link href="/">
            <Box sx={{ zIndex: 9999 }}>
              <LogoIcon />
            </Box>
          </Link>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.label} onClick={handleCloseNavMenu}>
                  <Link href={page.url}>
                    <Typography textAlign="center">{page.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}
          >
            {pages.map((page) => (
              <Button
                key={page.label}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  py: 2,
                  px: 3,
                  mr: '30px',
                  color: '#183B56',
                  fontSize: '16px',
                  fontWeight: 600,
                  display: 'block',
                }}
              >
                <Link href={page.url}>{page.label}</Link>
              </Button>
            ))}
            <LanguageChanger />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
