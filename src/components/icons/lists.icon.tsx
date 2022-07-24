import React from 'react';
import { IconType } from 'types/utility.types';

const ListsIcon: IconType = (props) => {
  const color = props?.isGrid ? '#FAAD13' : '#fff';
  return (
    <svg
      width="18"
      height="12"
      viewBox="0 0 18 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="18" height="2" fill={color} />
      <rect y="5" width="18" height="2" fill={color} />
      <rect y="10" width="18" height="2" fill={color} />
    </svg>
  );
};
export default ListsIcon;
