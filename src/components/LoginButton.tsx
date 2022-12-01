import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/userContext';
import { capitalizeWord } from '../utils/helpers';
import { ButtonTypes } from './types';

interface Props
  extends Pick<React.DOMAttributes<HTMLButtonElement>, 'onClick'> {
  text: ButtonTypes;
  step?: number;
}

export const LoginButton: React.FC<Props> = ({ step, text, onClick }) => {
  const { isLoggedIn } = useContext(UserContext);

  console.log(isLoggedIn);

  return text === 'login' || step == 2 ? (
    <Link to={isLoggedIn ? '/data' : '/'} className='align-self-end'>
      <Button type='submit' onClick={onClick}>
        {capitalizeWord(text)}
      </Button>
    </Link>
  ) : (
    <Button
      type='submit'
      variant='primary'
      className='align-self-end'
      onClick={onClick}
    >
      {capitalizeWord(text)}
    </Button>
  );
};
