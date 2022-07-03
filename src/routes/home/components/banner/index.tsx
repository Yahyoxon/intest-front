import React from 'react';
import Image from 'next/image';
import BannerImage from 'assets/images/banner.jpg';
import { BannerWrapper } from './banner.style';

const Banner = () => (
  <BannerWrapper>
    <Image src={BannerImage} alt="banner" objectFit="cover" />
  </BannerWrapper>
);

export default Banner;
