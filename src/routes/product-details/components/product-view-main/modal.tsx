import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { useTheme } from '@mui/system';
import {
  Button,
  Paper,
  Stack,
  TextareaAutosize,
  Typography,
  useMediaQuery,
} from '@mui/material';
import MapIcon from 'components/icons/map.icon';
import CallIcon from 'components/icons/call.icon';
import PostIcon from 'components/icons/post.icon';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Input } from 'components/input';
import CloseIcon from '@mui/icons-material/Close';

const ModalForm = ({
  handleModalOpen,
  openModal,
}: {
  handleModalOpen: () => void;
  openModal: boolean;
}) => {
  const theme = useTheme();
  const isMobile = !useMediaQuery(theme.breakpoints.up('md'));

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: isMobile ? '80%' : '100%',
    borderRadius: isMobile ? '8px' : '20px',
    maxWidth: isMobile ? '300px' : '1200px',
    minHeight: '400px',
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: isMobile ? '20px 40px' : '90px 80px',
  };
  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    name: yup.string().required('Name is required'),
  });
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ name: string; email: string; comments: string }>({
    resolver: yupResolver(validationSchema),
    defaultValues: {
      name: '',
      email: '',
      comments: '',
    },
  });
  const onSubmit = (data: any) => console.log(data);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={openModal}
      onClose={handleModalOpen}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            direction={isMobile ? 'column' : 'row'}
            alignItems="flex-start"
            justifyContent="space-between"
            sx={style}
          >
            <Button
              sx={{ position: 'absolute', top: 12, right: 0 }}
              onClick={handleModalOpen}
            >
              <CloseIcon fontSize="large" />
            </Button>
            <Stack direction="column" width={isMobile ? '100%' : '50%'}>
              {!isMobile && (
                <>
                  <Typography
                    variant="h5"
                    fontSize={isMobile ? '22px' : '28px'}
                    fontWeight={600}
                    color="#182F43"
                    lineHeight={isMobile ? '32px' : '40px'}
                  >
                    Отправить заявку на покупку
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={isMobile ? '16px' : '16px'}
                    fontWeight={400}
                    color="#182F43"
                    lineHeight={isMobile ? '24px' : '25px'}
                    marginTop="16px"
                  >
                    Через несколько минут с вами свяжется нас менеджер.
                  </Typography>
                </>
              )}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                marginTop={isMobile ? '20px' : '35px'}
              >
                <MapIcon />
                <Stack marginLeft="15px">
                  <Typography
                    variant="subtitle1"
                    fontSize={isMobile ? '18px' : '18px'}
                    fontWeight={700}
                    color="#182F43"
                    lineHeight={isMobile ? '28px' : '28px'}
                  >
                    Адрес
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={isMobile ? '16px' : '16px'}
                    fontWeight={400}
                    color="#182F43"
                    lineHeight={isMobile ? '26px' : '26px'}
                  >
                    {' '}
                    Узбекистан, город Ташкент, Алмазарский район, 172 д
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                marginTop={isMobile ? '15px' : '35px'}
              >
                <CallIcon />
                <Stack marginLeft="15px">
                  <Typography
                    variant="subtitle1"
                    fontSize={isMobile ? '18px' : '18px'}
                    fontWeight={700}
                    color="#182F43"
                    lineHeight={isMobile ? '28px' : '28px'}
                  >
                    Номер телефона
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={isMobile ? '16px' : '16px'}
                    fontWeight={400}
                    color="#182F43"
                    lineHeight={isMobile ? '26px' : '26px'}
                  >
                    {' '}
                    +998991029999
                  </Typography>
                </Stack>
              </Stack>
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="flex-start"
                marginTop={isMobile ? '15px' : '35px'}
              >
                <PostIcon />
                <Stack marginLeft="15px">
                  <Typography
                    variant="subtitle1"
                    fontSize={isMobile ? '18px' : '18px'}
                    fontWeight={700}
                    color="#182F43"
                    lineHeight={isMobile ? '28px' : '28px'}
                  >
                    E-mail
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    fontSize={isMobile ? '16px' : '16px'}
                    fontWeight={400}
                    color="#182F43"
                    lineHeight={isMobile ? '26px' : '26px'}
                  >
                    intest@internet.ru
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack direction="column" width={isMobile ? '100%' : '40%'}>
              <Paper
                sx={{
                  display: 'block',
                  height: '100%',
                  padding: 2,
                  boxSizing: 'border-box',
                }}
              >
                <Controller
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="John"
                      label={errors?.name?.message || 'Ваше имя'}
                      fullWidth
                      sx={{
                        marginBottom: isMobile ? '15px' : '30px',
                        borderColor: '#C1D6E9',
                        borderRadius: 1,
                      }}
                      {...field}
                      error={!!errors?.name?.message}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      placeholder="example@gmail.com"
                      label={errors?.email?.message || 'Электронный адрес'}
                      fullWidth
                      sx={{
                        marginBottom: isMobile ? '15px' : '30px',
                        borderColor: '#C1D6E9',
                      }}
                      error={!!errors?.email?.message}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="comments"
                  control={control}
                  render={({ field }) => (
                    <TextareaAutosize
                      aria-label="minimum height"
                      minRows={3}
                      placeholder="Enter any details"
                      style={{
                        boxSizing: 'border-box',
                        border: '1px solid #C1D6E9',
                        outline: 'none',
                        width: '100%',
                        borderRadius: '4px',
                        padding: '16px 12px 14px 12px',
                      }}
                      {...field}
                    />
                  )}
                />
                <Button
                  type="submit"
                  fullWidth
                  sx={{
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '22px',
                    textAlign: 'center',
                    color: '#fff',
                    backgroundColor: '#FAAD13',
                    marginTop: isMobile ? '15px' : '30px',
                    paddingY: '10px',
                    ':hover': {
                      backgroundColor: 'blue',
                    },
                  }}
                >
                  Отправить
                </Button>
              </Paper>
            </Stack>
          </Stack>
        </form>
      </Fade>
    </Modal>
  );
};

export default ModalForm;
