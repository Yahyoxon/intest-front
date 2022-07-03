import { Stack, Typography } from '@mui/material';
import React from 'react';
import Hero from 'assets/png/hero.png';
import Image from 'next/image';
import WaveElement from 'assets/svg/waveElement.svg';
import { HeroWrapper, NoteContainer, WaveWrapper } from './note.styles';

interface NoteProps {
  title: string;
  description?: string;
  button?: React.ReactNode;
}

const Note: React.FC<NoteProps> = ({ title, description, button }) => (
  <NoteContainer>
    <Stack maxWidth="40%" gap="1.25rem">
      <Typography color="white" variant="h5" fontWeight={600}>
        {title}
      </Typography>
      <Typography color="white" fontSize="18px" fontWeight={600}>
        {description}
      </Typography>
      {button}
    </Stack>
    <HeroWrapper>
      <Image height="200%" src={Hero} alt="hero" layout="fixed" />
    </HeroWrapper>
    <WaveWrapper>
      <Image src={WaveElement} alt="wave" layout="fixed" />
    </WaveWrapper>
  </NoteContainer>
);

export default Note;
