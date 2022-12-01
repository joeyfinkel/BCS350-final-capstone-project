import React from 'react';
import { MappedType, UserInfo } from '../types';
import { capitalizeWord } from '../utils/helpers';
import { User, UserProps } from './User';

interface Props extends Omit<UserProps, 'label' | 'value'> {
  userValue: Partial<MappedType<UserInfo>>;
  idx: number;
}

export const UserField: React.FC<Props> = ({
  userValue,
  idx,
  placeholder,
  ...rest
}) => {
  const [key, value] = Object.entries(userValue)[0];
  const label = key.includes('_') ? key.split('_').join(' ') : key;

  return (
    <User
      label={capitalizeWord(label)}
      className='w-100'
      controlId={`${key}_${idx}`}
      value={value}
      placeholder={placeholder ? placeholder : value.toString()}
      {...rest}
    />
  );
};
