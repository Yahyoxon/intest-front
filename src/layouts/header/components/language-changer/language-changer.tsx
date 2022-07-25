import * as React from 'react';
import { useRouter } from 'next/router';
import { Button, Stack } from '@mui/material';
import Link from 'next/link';

const LanguageChanger = () => {
  const { locale, locales, asPath } = useRouter();
  const selectedLangIndex: number | undefined = locales?.indexOf(locale!);
  const [selectedIndex, setSelectedIndex] = React.useState(selectedLangIndex);
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
      {locales?.map((lang, i) => (
        <Link key={lang} href={asPath} locale={lang}>
          <Button
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
            {lang.toUpperCase()}
          </Button>
        </Link>
      ))}
    </Stack>
  );
};

export default LanguageChanger;
