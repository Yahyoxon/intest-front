import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { get } from 'lodash';
import { Iproduct } from 'routes/product-details/product.type';

const DetailsTabs: React.FC<Iproduct> = ({ product }) => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', marginTop: 10 }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              '& .MuiTab-root.Mui-selected': { color: '#E2A412!important' },
              '& .MuiTabs-indicator': {
                backgroundColor: '#E2A412!important',
                height: '1px',
              },
            }}
          >
            <Tab
              label="Описание"
              value="1"
              sx={{
                color: '#81838C',
                fontWeight: 700,
                fontSize: '20px',
                textTransform: 'inherit',
              }}
            />
            <Tab
              label="Технические характеристики"
              value="2"
              sx={{
                color: '#81838C',
                fontWeight: 700,
                fontSize: '20px',
                textTransform: 'inherit',
              }}
            />
            <Tab
              label="Комплектация"
              value="3"
              sx={{
                color: '#81838C',
                fontWeight: 700,
                fontSize: '20px',
                textTransform: 'inherit',
              }}
            />
          </TabList>
        </Box>
        <TabPanel value="1">
          <span
            dangerouslySetInnerHTML={{
              __html: get(product, 'review', ''),
            }}
          />
        </TabPanel>
        <TabPanel value="2">
          <span
            dangerouslySetInnerHTML={{
              __html: get(product, 'characteristics', ''),
            }}
          />
        </TabPanel>
        <TabPanel value="3">
          <span
            dangerouslySetInnerHTML={{
              __html: get(product, 'specifications', ''),
            }}
          />
        </TabPanel>
      </TabContext>
    </Box>
  );
};
export default DetailsTabs;
