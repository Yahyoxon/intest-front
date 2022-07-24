import React from 'react';
import { IconType } from 'types/utility.types';

const GridIcon: IconType = (props) => {
  const color = props?.isGrid ? '#fff' : '#FAAD13';
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="4" height="4" fill={color} />
      <rect x="6" width="4" height="4" fill={color} />
      <rect x="12" width="4" height="4" fill={color} />
      <rect y="6" width="4" height="4" fill={color} />
      <rect x="6" y="6" width="4" height="4" fill={color} />
      <rect x="12" y="6" width="4" height="4" fill={color} />
      <rect y="12" width="4" height="4" fill={color} />
      <rect x="6" y="12" width="4" height="4" fill={color} />
      <rect x="12" y="12" width="4" height="4" fill={color} />
    </svg>
  );
};

export default GridIcon;
