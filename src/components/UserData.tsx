import React, { useState } from 'react';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { UserInfo } from '../types';
import { User } from './User';

interface Props {
  user: UserInfo;
}

export const UserData: React.FC<Props> = ({ user }) => {
  const [color, setColor] = useState('#f7f7ff');
  const { email, first_name, last_name, username } = user;

  return (
    <div className='d-flex align-items-center gap-2'>
      <Row className='flex-fill'>
        <User
          label='First name'
          className='w-100'
          controlId='firstName'
          placeholder={first_name}
          value={first_name}
        />
        <User
          label='Last name'
          controlId='lastName'
          placeholder={last_name}
          value={last_name}
        />
        <User
          label='Username'
          controlId='username'
          placeholder={username}
          value={username}
        />
        <User
          label='Email'
          controlId='firstName'
          placeholder={email}
          value={email}
        />
      </Row>
      <OverlayTrigger
        placement='bottom'
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip>Delete</Tooltip>}
      >
        <FontAwesomeIcon
          icon={faMinusCircle}
          className='align-self-end mb-2'
          size='lg'
          role='button'
          color={color}
          onMouseEnter={() => setColor('red')}
          onMouseLeave={() => setColor('#f7f7ff')}
        />
      </OverlayTrigger>
    </div>
  );
};
