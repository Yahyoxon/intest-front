import { Button, Container, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import partnersImg from "assets/images/partners.jpg"
import MailIcon from 'components/icons/mail.icon'
import { FormWrapper, InputStyled, InputWrapper, InputChildWrapper,InputChildWrapperImage } from './index.type'

const BePartner = () => {
    console.log("first")
    return (
        <FormWrapper>
            <Container maxWidth="lg" sx={{ padding: "125px 0" }}>
                <Stack direction="row" justifyContent="space-between">
                    <Image src={partnersImg} alt="partners" />
                    <Stack width="50%" justifyContent="center">
                        <Typography
                            variant="h2"
                            fontSize="54px"
                            fontWeight={600}
                            color="#fff"
                            lineHeight="62px"
                            textAlign="left"
                        >
                            Стать партнером
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            fontSize="18px"
                            fontWeight={400}
                            color="rgba(255, 255, 255, 0.7)"
                            lineHeight="30px"
                            textAlign="left"
                            margin="50px auto"
                        >
                            Create custom landing pages with Omega that converts more visitors than any website. With lots of unique blocks, you can easily build a page
                        </Typography>
                        <InputWrapper>
                            <InputChildWrapper>
                            <InputChildWrapperImage>
                                <MailIcon/>
                            </InputChildWrapperImage>
                                <InputStyled placeholder='Ваш e-mail' />
                            </InputChildWrapper>

                            <Button variant='contained' sx={{
                                backgroundColor: "#FAAD13", borderRadius: "6px",
                                padding: "18px 22px"
                            }}>Отправить</Button>
                        </InputWrapper>
                    </Stack>
                </Stack>
            </Container>
        </FormWrapper>
    )
}

export default BePartner