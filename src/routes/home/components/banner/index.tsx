import React from 'react';
import Image from 'next/image';
import BannerImage from 'assets/images/banner.jpg';
import { BannerWrapper, SearchWrapper } from './banner.style';
import AsyncSearch from '../search';

const Banner = () => (
  <BannerWrapper>
    <SearchWrapper>
      <AsyncSearch />
    </SearchWrapper>
    <Image src={BannerImage} alt="banner" objectFit="cover" />
  </BannerWrapper>
);

export default Banner;
