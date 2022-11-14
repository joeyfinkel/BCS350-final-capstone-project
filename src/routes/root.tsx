import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Outlet, Link } from 'react-router-dom';
import { UserInfo } from '../types';
import styles from '../styles/Login.module.css';
import axios from 'axios';

// #TODO Import to main.tsx
export const loader = async () => {
  // Fetch
};

export const Root = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    axios
      .post<UserInfo>('', userInfo, {
        headers: { 'content-type': 'application/json' },
      })
      .then((value) => {
        // value.data.
      });
  };

  return (
    <Form action='' className={styles.wrapper}>
      <div className='d-flex flex-column gap-3'>
        <h1>Login</h1>
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
                setUserInfo({ ...userInfo, email: e.target.value })
              }
            />
          </FloatingLabel>
          <FloatingLabel controlId='floatingPassword' label='Password'>
            <Form.Control
              type='password'
              placeholder='Password'
              value={userInfo.password}
              onChange={(e) =>
                setUserInfo({ ...userInfo, password: e.target.value })
              }
            />
          </FloatingLabel>
        </div>
        <p>
          Don't have an account? <Link to='register'>Register here</Link>
        </p>
        <Link to='dashboard'>
          <Button variant='primary'>Login</Button>
        </Link>
      </div>
    </Form>
  );
};
