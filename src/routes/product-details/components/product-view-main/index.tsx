import { Box, Button, Stack, Typography } from '@mui/material';
import { get } from 'lodash';
import Image from 'next/image';
import React, { useState } from 'react';
import { Iproduct } from 'routes/product-details/product.type';
import defaultImage from 'assets/images/default.jpg';
import DocIcon from 'components/icons/doc.icon';
import { DownloadButton, GalleryWrapper, ImageWrapper } from '../index.style';
import ModalForm from './modal';

const MainView: React.FC<Iproduct> = ({ product, isMobile }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selected, setSelected] = useState(
    get(product, 'file.thumbnails.normal.src', defaultImage)
  );
  const handleModalOpen = () => {
    setOpenModal(!openModal);
  };
  return (
    <>
      <ModalForm {...{ handleModalOpen, openModal }} />
      <Stack direction={isMobile ? 'column' : 'row'} margin="40px auto">
        <Stack
          direction={isMobile ? 'column-reverse' : 'row'}
          gap="5px"
          width={isMobile ? '100%' : '50%'}
        >
          <Stack
            direction={!isMobile ? 'column' : 'row'}
            marginRight="10px"
            sx={{ width: isMobile ? '100%' : 'auto', overflow: 'auto' }}
          >
            {get(product, 'galleryItems', []).map((item: any) => (
              <GalleryWrapper
                key={get(item, 'id')}
                itemSelected={item === selected}
              >
                <Image
                  src={get(item, 'thumbnails.normal.src', defaultImage)}
                  width="70px"
                  height="70px"
                  objectFit="cover"
                  loading="lazy"
                  // layout="fixed"
                  alt={get(item, 'title')}
                  onClick={() => setSelected(item)}
                />
              </GalleryWrapper>
            ))}
          </Stack>
          <ImageWrapper>
            <img
              src={get(selected, 'thumbnails.normal.src', selected)}
              alt={get(product, 'name')}
            />
          </ImageWrapper>
        </Stack>
        <Stack width={isMobile ? '100%' : '50%'}>
          <Typography
            variant="h1"
            fontSize={isMobile ? '28px' : '34px'}
            fontWeight={600}
            color="#0D152E"
            lineHeight={isMobile ? '40px' : '50px'}
          >
            {get(product, 'name')}
          </Typography>

          <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            marginTop={3}
          >
            <Typography
              color="#0D152E"
              fontSize={isMobile ? '30px' : '38px'}
              fontWeight={700}
            >
              {get(product, 'price')} $
            </Typography>
            {get(product, 'price') !== null ||
              (0 && (
                <Typography
                  color="#81838C"
                  fontSize="20px"
                  fontWeight={400}
                  marginLeft={2}
                >
                  <del>{get(product, 'sale_price')} $</del>
                </Typography>
              ))}
          </Stack>

          <Typography
            variant="subtitle1"
            fontSize="16px"
            fontWeight={400}
            color="#0D152E"
            lineHeight="28px"
          >
            <span
              dangerouslySetInnerHTML={{
                __html: get(product, 'description', ''),
              }}
            />
          </Typography>
          <Stack direction="row" marginTop={isMobile ? '20px' : '50px'}>
            <Button
              variant="contained"
              sx={{
                fontSize: '18px',
                fontWeight: 700,
                backgroundColor: '#E2A412',
                padding: '16px 50px',
                width: '170px',
                borderRadius: '4px',
              }}
              onClick={handleModalOpen}
            >
              Купить
            </Button>
            {get(product, 'document') !== null && (
              <DownloadButton
                href={`${get(product, 'document.domain')}/${get(
                  product,
                  'document.folder'
                )}/${get(product, 'document.file')}`}
              >
                <Box sx={{ zIndex: 99, marginRight: '10px' }}>
                  <DocIcon />
                </Box>
                Скачать
              </DownloadButton>
            )}
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};
export default MainView;
