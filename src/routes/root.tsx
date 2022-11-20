import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { UserInfo } from '../types';
import styles from '../styles/Login.module.css';
import axios from 'axios';
import { Sidebar } from '../components/Sidebar';

// #TODO Import to main.tsx
export const loader = async () => {
  // Fetch
};

export const Root: React.FC = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    id: 0,
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    axios
      .post<UserInfo>(
        'http://localhost:80/BCS350/capstone-project/api/index.php',
        { userInfo }
      )
      .then((value) => {
        console.log(value.data);
      });
  };

  return (
    <Sidebar
      contentPosition='center'
      title='Login'
      button
      buttonText='Login'
      loggedIn={false}
    >
      <Form action=''>
        <div className='d-flex flex-column gap-3'>
          <FloatingLabel
            controlId='floatingInput'
            label='Email address'
            className='mb-3'
          >
            <Form.Control
              type='email'
              placeholder='name@example.com'
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo((prev) => ({ ...prev, email: e.target.value }))
              }
            />
          </FloatingLabel>
          <FloatingLabel controlId='floatingPassword' label='Password'>
            <Form.Control
              type='password'
              placeholder='Password'
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
          </FloatingLabel>
        </div>
        <p>
          Don't have an account?{' '}
          <Link to='register' className='redirect-link'>
            Register here
          </Link>
        </p>
      </Form>
    </Sidebar>
  );
};
