import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Button, Stack, Typography } from '@mui/material';
import ArrowDown from 'components/icons/arrow-down.icon';
import FlagUzIcon from 'components/icons/flag-uz.icon';

const languages = ['Ru', 'EN'];

const LanguageChanger = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleSelectLang = (index: number) => {
    setSelectedIndex(index);
  };
  return (
    <Stack
      justifyContent="space-between"
      direction="row"
      sx={{
        backgroundColor: 'rgba(35, 52, 98, 0.1)',
        borderRadius: '88px',
        padding: '8px',
        height: '35px',
      }}
    >
      {languages.map((lang, i) => (
        <Button
          key={lang}
          sx={{
            color: selectedIndex === i ? '#fff' : '#E2A412',
            fontSize: '13px',
            fontWeight: 700,
            background: selectedIndex === i ? '#E2A412' : 'transparent',
            borderRadius: '88px',
            padding: 0,
            ':hover': {
              backgroundColor:
                selectedIndex === i ? '#E2A412!important' : 'transparent',
            },
          }}
          onClick={() => handleSelectLang(i)}
        >
          {lang}
        </Button>
      ))}
    </Stack>
  );
};

export default LanguageChanger;
