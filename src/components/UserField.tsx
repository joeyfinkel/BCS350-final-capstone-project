import React, { useState, useId } from 'react';
import { capitalizeWord } from '../utils/helpers';
import { User, UserProps } from './User';

export interface UserFieldProps extends Omit<UserProps, 'label' | 'value'> {
  entries: [string, string | number];
}

export const UserField: React.FC<UserFieldProps> = ({
  placeholder,
  entries,
}) => {
  const [key, value] = entries;
  const [updateMsg, setUpdateMsg] = useState('');
  const [userValue, setUserValue] = useState(value);

  const id = useId();

  const label = key.includes('_') ? key.split('_').join(' ') : key;

  const editField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setUserValue(e.target.value);
    setUpdateMsg('Updating...');
  };

  return (
    <User
      label={capitalizeWord(label)}
      className='w-100'
      controlId={`${key}_${id}`}
      value={userValue}
      placeholder={placeholder ? placeholder : userValue?.toString()}
      onChange={editField}
      duration={500}
      hint={updateMsg}
    />
  );
};
