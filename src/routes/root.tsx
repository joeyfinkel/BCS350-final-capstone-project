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
  const auth = useContext(AuthContext);

  const users = useUsers();

  const handleSubmit = (e: React.MouseEvent<HTMLFormElement, MouseEvent>) => {
    const form = e.currentTarget;
    const user = users.find(
      ({ email, password }) =>
        email === loginInfo.email && password === loginInfo.password
    );

    if (!form.checkValidity()) {
      e.preventDefault();
      e.stopPropagation();
    }

    setValidated(true);

    if (user) {
      console.log(auth.loggedIn);
      const to = location.state?.from?.pathname || '/';
      auth?.signIn?.(user, () => {
        navigate('/', { replace: true });
      });
    }
  };

  return (
    <Sidebar contentPosition='center' title='Login' text='login' button>
      <Form
        action='#'
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
              userValue={loginInfo.email}
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
              userValue={loginInfo.password}
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
