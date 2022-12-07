import React, { useState, useRef, useMemo } from 'react';
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
}

export const UserData: React.FC<Props> = ({ user }) => {
  const [color, setColor] = useState('#f7f7ff');

  const container = useRef<HTMLDivElement | null>(null);

  const entries = useMemo(() => {
    const entries = Object.entries(user);
    const password = Object.keys(user).indexOf('password');
    const firstPart = entries.slice(1, password);
    const lastPart = entries.slice(password + 1, entries.length);

    return [...firstPart, ...lastPart];
  }, [user]);

  const deleteUser = (id: number) => {
    axios
      .delete<string[]>(
        `http://localhost:80/BCS350/capstone-project/api/user/${id}/delete`
      )
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <div className='d-flex align-items-center gap-2' ref={container}>
      <Row className='flex-fill'>
        {entries.map((entry, idx) => (
          <UserField entries={entry} key={idx} />
        ))}
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
          onClick={() => deleteUser(user.id!)}
          onMouseEnter={() => setColor('red')}
          onMouseLeave={() => setColor('#f7f7ff')}
        />
      </OverlayTrigger>
    </div>
  );
};
