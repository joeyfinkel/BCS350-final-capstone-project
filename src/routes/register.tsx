import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';
import { Sidebar } from '../components/Sidebar';
import { LoginButton } from '../components/LoginButton';
import { UserInfo } from '../types';
import axios from 'axios';

export const Register = () => {
  const [step, setStep] = useState(1);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    email: '',
    first_name: '',
    last_name: '',
    username: '',
    password: '',
  });

  const addNewUser = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    console.log('Adding user...');

    axios
      .post<UserInfo>(
        'http://localhost:80/BCS350/capstone-project/api/index.php',
        { userInfo },
        { headers: { 'Content-Type': 'multipart/form-data' } }
      )
      .then((value) => {
        console.log(value.data.email);
      });
  };

  return (
    <Sidebar
      contentPosition='center'
      title={step === 1 ? 'Register' : 'Choose a username'}
      button={step === 1}
      text='register'
    >
      <Form method='post'>
        {step === 1 ? (
          <>
            <div className='d-flex flex-column gap-3'>
              <FloatingLabel
                controlId='floatingInput'
                label='First name'
                className='mb-3'
              >
                <Form.Control
                  type='text'
                  placeholder='John'
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      first_name: e.target.value,
                    }))
                  }
                />
              </FloatingLabel>
              <FloatingLabel
                controlId='floatingInput'
                label='Last name'
                className='mb-3'
              >
                <Form.Control
                  type='text'
                  placeholder='Doe'
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      last_name: e.target.value,
                    }))
                  }
                />
              </FloatingLabel>
              <FloatingLabel
                controlId='floatingInput'
                label='Email address'
                className='mb-3'
              >
                <Form.Control
                  type='email'
                  placeholder='name@example.com'
                  onChange={(e) =>
                    setUserInfo((prev) => ({
                      ...prev,
                      email: e.target.value,
                    }))
                  }
                />
              </FloatingLabel>
              <FloatingLabel controlId='floatingPassword' label='Password'>
                <Form.Control
                  type='password'
                  placeholder='Password'
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
              Already have an account?{' '}
              <Link to='/' className='redirect-link'>
                Login here
              </Link>
            </p>
          </>
        ) : (
          <div className='d-flex flex-column gap-3'>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size='2x'
              onClick={() => setStep((prev) => prev - 1)}
              role='button'
            />
            <FloatingLabel
              controlId='floatingInput'
              label='Username'
              className='mb-3'
            >
              <Form.Control
                type='text'
                placeholder='John123'
                onChange={(e) =>
                  setUserInfo((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
              />
            </FloatingLabel>
            <LoginButton step={step} text='register' onClick={addNewUser} />
          </div>
        )}
      </Form>
    </Sidebar>
  );
};
