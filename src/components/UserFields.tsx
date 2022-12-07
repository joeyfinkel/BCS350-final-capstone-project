import React from 'react';
import { UserFieldType } from './types';
import { UserField } from './UserField';

interface Props {
  fields: UserFieldType[];
}

export const UserFields: React.FC<Props> = ({ fields }) => {
  return (
    <>
      {fields.map((field) => (
        <UserField key={{ [field.value]: field.value }} {...field} />
      ))}
    </>
  );
};
