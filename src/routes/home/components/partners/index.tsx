import { Stack, Typography } from '@mui/material'
import React from 'react'
import Image from 'next/image'
import { get } from 'lodash'
import { useQuery } from 'react-query'
import { getAllData } from 'services/get/all'
import { ImageWrapper, PartnersWrapper } from './index.type'

const Partners = () => {
    //  eslint-disable-next-line
    const { data, isLoading, isFetching, isSuccess } = useQuery('partner', () =>
        getAllData('/partner?include=file&_l=ru')
    );
    return (
        <PartnersWrapper>
            <Typography
                variant="h2"
                fontSize="38px"
                fontWeight={600}
                color="#183B56"
                lineHeight="52px"
                textAlign="center"
            >
                Наши партнеры
            </Typography>

            <Typography
                variant="subtitle1"
                fontSize="18px"
                fontWeight={400}
                color="#5A7184"
                lineHeight="32px"
                textAlign="center"
                width="60%"
                margin="24px auto"
            >
                EhyaSpace can be plugged to several services from owner to customer. Allowing you to shape it to your workflow.
            </Typography>
            <Stack direction="row" width="100%" flexWrap="wrap" rowGap={6} justifyContent="center" alignItems="center" marginTop="35px">
                {isSuccess && get(data,'data').map((item: any) => (
                    <ImageWrapper key={(item.id).toString()}>
                        <Image src={get(item, "file.thumbnails.normal.src")} height={35} width="100%" alt={get(item, "file.thumbnails.normal.src")} />
                    </ImageWrapper>
                ))}
            </Stack>
        </PartnersWrapper>
    )
}

export default Partners