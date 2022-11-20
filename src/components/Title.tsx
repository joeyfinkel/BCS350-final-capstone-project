import React from 'react';
import { TitleProps } from './types';

export const Title: React.FC<TitleProps> = ({ title, titleSize }) => {
  switch (titleSize) {
    case 'h1':
      return <h1 className='text-center'>{title}</h1>;
    case 'h2':
      return <h2 className='text-center'>{title}</h2>;
    case 'h3':
      return <h3 className='text-center'>{title}</h3>;
    case 'h4':
      return <h4 className='text-center'>{title}</h4>;
    case 'h5':
      return <h5 className='text-center'>{title}</h5>;
    case 'h6':
      return <h6 className='text-center'>{title}</h6>;
    default:
      return <h1 className='text-center'>{title}</h1>;
  }
};
