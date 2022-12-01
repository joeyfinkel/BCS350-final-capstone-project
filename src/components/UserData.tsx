import React, { useState, useRef } from 'react';
import { faMinusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, OverlayTrigger, Tooltip } from 'react-bootstrap';
import { UserInfo } from '../types';
import { User } from './User';
import { useUsers } from '../hooks/useUsers';
import axios from 'axios';
import { FormControlProps } from 'react-bootstrap';
import { UserField } from './UserField';

interface Props {
  user: UserInfo;
  idx: number;
}

export const UserData: React.FC<Props> = ({ user, idx }) => {
  const [color, setColor] = useState('#f7f7ff');
  const [value, setValue] = useState({ ...user });
  const [updateMsg, setUpdateMsg] = useState('');
  const container = useRef<HTMLDivElement | null>(null);
  const { email, first_name, last_name, username } = user;

  const deleteUser = () => {
    axios
      .delete<string[]>(
        'http://localhost:80/BCS350/capstone-project/api/index.php'
      )
      .then((value) => {
        console.log(value);
      });
  };

  const editField = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    value: keyof UserInfo
  ) => {
    setValue((prev) => ({ ...prev, [value]: e.target.value }));
    setUpdateMsg('Updating...');
  };

  return (
    <div className='d-flex align-items-center gap-2' ref={container}>
      <Row className='flex-fill'>
        <UserField
          userValue={{ first_name: value.first_name! }}
          idx={idx}
          onChange={(e) => editField(e, 'first_name')}
          hint={updateMsg}
          duration={500}
        />
        <User
          label='Last name'
          controlId={`lastName_${idx}`}
          placeholder={value.last_name}
          value={value.last_name}
        />
        <User
          label='Username'
          controlId={`username_${idx}`}
          placeholder={value.username}
          value={value.username}
        />
        <User
          label='Email'
          controlId={`email${idx}`}
          placeholder={value.email}
          value={value.email}
        />
      </Row>
      <OverlayTrigger
        placement='bottom'
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip>Delete</Tooltip>}
        container={container}
      >
        <FontAwesomeIcon
          icon={faMinusCircle}
          className='align-self-end mb-2'
          size='lg'
          role='button'
          color={color}
          onClick={deleteUser}
          onMouseEnter={() => setColor('red')}
          onMouseLeave={() => setColor('#f7f7ff')}
        />
      </OverlayTrigger>
    </div>
  );
};
