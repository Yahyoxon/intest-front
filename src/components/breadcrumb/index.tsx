import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const PageBreadcrumb = ({ pageData }: { pageData: any }) => {
  const lastItem = pageData.length - 1;
  const multiBreadcrumbs = pageData?.map((item: any, index: number) =>
    index !== lastItem ? (
      <Link underline="hover" key={item?.title} href={item?.link}>
        {item?.title}
      </Link>
    ) : (
      <Typography
        key={item?.title}
        color="text.primary"
        sx={{ color: '#737373' }}
      >
        {item?.title}
      </Typography>
    )
  );
  const finalBreadcrumb = [
    <Link underline="hover" key="1" color="#252B42" href="/">
      Главный
    </Link>,
    ...multiBreadcrumbs,
  ];
  return (
    <Stack spacing={2} sx={{ paddingY: 2 }}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="large" />}
        aria-label="breadcrumb"
      >
        {finalBreadcrumb}
      </Breadcrumbs>
    </Stack>
  );
};
export default PageBreadcrumb;
