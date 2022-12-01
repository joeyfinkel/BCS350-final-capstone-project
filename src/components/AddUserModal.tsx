import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, ModalProps } from 'react-bootstrap';
import { Modal } from 'react-bootstrap';
import { usePassword } from '../hooks/usePassword';
import { UserInfo } from '../types';
import { User } from './User';

export const AddUserModal: React.FC<
  Required<Pick<ModalProps, 'show' | 'onHide' | 'container'>>
> = ({ onHide, show, container }) => {
  const password = usePassword(8);
  const [user, setUser] = useState<UserInfo>({
    email: '',
    password,
    first_name: '',
    last_name: '',
  });

  const addNewUser = () => {
    axios.post(
      'http://localhost:80/BCS350/capstone-project/api/index.php',
      user
    );

    onHide();
  };

  return (
    <Modal
      size='sm'
      show={show}
      onHide={onHide}
      container={container}
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
            onChange={(e) =>
              setUser((prev) => ({ ...prev, username: e.target.value }))
            }
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
            readOnly
            value={password}
            controlId='password'
            hint="The auto-generated password can't be changed"
          />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant='primary'
          disabled={Object.values(user).length !== 5}
          onClick={addNewUser}
        >
          Add user
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
