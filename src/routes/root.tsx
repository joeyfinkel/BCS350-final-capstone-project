import React, { useState, useContext } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { UserInfo } from '../types';
import { Sidebar } from '../components/Sidebar';
import { useUsers } from '../hooks/useUsers';
import { AuthContext } from '../context/authContext';

// #TODO Import to main.tsx
export const loader = async () => {
  // Fetch
};

export const Root: React.FC = () => {
  const [validated, setValidated] = useState(false);
  const [loginInfo, setLoginInfo] = useState<UserInfo>({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const location = useLocation();
  const { user, setUser } = useContext(AuthContext);

  const users = useUsers();

  const login = () => {
    const current = users.find(
      ({ email, password }) =>
        email === loginInfo.email && password === loginInfo.password
    );

    console.log(current);

    setUser?.(current!);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    const form = e.currentTarget;

    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    login();
    console.log(user);
  };

  return (
    <Sidebar contentPosition='center' title='Login' text='login' button>
      <Form
        className='d-flex flex-column'
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <div className='d-flex flex-column gap-3'>
          <FloatingLabel controlId='email' label='Email address'>
            <Form.Control
              type='email'
              placeholder='name@example.com'
              required
              value={loginInfo.email}
              onChange={(e) =>
                setLoginInfo((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <Form.Control.Feedback type='invalid'>
              Please enter your email
            </Form.Control.Feedback>
          </FloatingLabel>
          <FloatingLabel controlId='floatingPassword' label='Password'>
            <Form.Control
              type='password'
              placeholder='Password'
              required
              value={loginInfo.password}
              onChange={(e) =>
                setLoginInfo((prev) => ({
                  ...prev,
                  password: e.target.value,
                }))
              }
            />
            <Form.Control.Feedback type='invalid'>
              Please enter your password
            </Form.Control.Feedback>
          </FloatingLabel>
        </div>
        <p className='mt-4'>
          Don't have an account?{' '}
          <Link to='/register' className='redirect-link'>
            Register here
          </Link>
        </p>
        <Button type='submit' className='align-self-end'>
          Login
        </Button>
      </Form>
    </Sidebar>
  );
};
