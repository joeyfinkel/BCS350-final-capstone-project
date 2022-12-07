import axios from 'axios';
import React, { useState, useEffect, useRef } from 'react';
import { Button, ModalProps } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { usePassword } from '../hooks/usePassword';
import { UserInfo } from '../types';
import { generateRandomNumbers } from '../utils/helpers';
import { User } from './User';

export const AddUserModal: React.FC<
  Required<Pick<ModalProps, 'show' | 'onHide' | 'container'>>
> = ({ onHide, show, container }) => {
  const password = usePassword(8);
  const [shouldRefresh, setRefresh] = useState(false);
  const [user, setUser] = useState<UserInfo>({
    email: '',
    password,
    first_name: '',
    last_name: '',
  });

  const passwordRef = useRef<HTMLInputElement | null>(null);

  const onExited = () => {
    setUser({
      email: '',
      password: '',
      username: '',
      first_name: '',
      last_name: '',
    });
  };

  const addNewUser = () => {
    const passwordValue = passwordRef.current?.value;

    axios.post(
      'http://localhost:80/BCS350/capstone-project/api/index.php',
      user
    );
    setUser((prev) => ({ ...prev, password: passwordValue! }));

    setRefresh(!shouldRefresh);
    // Closes the modal
    onHide();
  };

  useEffect(() => {
    const refreshUsers = () => {
      axios.get('http://localhost:80/BCS350/capstone-project/api/index.php');
    };

    if (shouldRefresh) {
      refreshUsers();
    }
  }, [shouldRefresh]);

  return (
    <Modal
      size='sm'
      show={show}
      onHide={onHide}
      container={container}
      onExited={onExited}
      centered
      static
    >
      <Modal.Header closeButton closeVariant='white'>
        <Modal.Title>Add new user</Modal.Title>
      </Modal.Header>
      <Modal.Body className='py-0'>
        <div className='d-flex flex-column'>
          <User
            label='First name'
            type='text'
            controlId='firstName'
            onChange={(e) =>
              setUser((prev) => ({ ...prev, first_name: e.target.value }))
            }
          />
          <User
            label='Last name'
            type='text'
            controlId='lastName'
            onChange={(e) =>
              setUser((prev) => ({ ...prev, last_name: e.target.value }))
            }
          />
          <User
            label='Username'
            type='text'
            controlId='username'
            value={
              user.first_name === '' && user.last_name === ''
                ? ''
                : `${user.first_name?.toLowerCase()}${user.last_name?.toLowerCase()}${generateRandomNumbers(
                    2
                  )}`
            }
            readOnly
          />
          <User
            label='Email'
            type='email'
            controlId='email'
            onChange={(e) =>
              setUser((prev) => ({ ...prev, email: e.target.value }))
            }
          />
          <User
            label='Password'
            type='password'
            hint="The auto-generated password can't be changed"
            controlId='password'
            value={password}
            ref={passwordRef}
            readOnly
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          disabled={Object.values(user).length !== 4}
          onClick={addNewUser}
        >
          Add user
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
