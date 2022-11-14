import React, { useState } from 'react';
import { Button, FloatingLabel, Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import styles from '../styles/Login.module.css';

export const Register = () => {
  const [step, setStep] = useState(1);

  return (
    <Form action='' className={styles.wrapper}>
      {step === 1 ? (
        <div className='d-flex flex-column gap-3'>
          <h1 className='text-center'>Register</h1>
          <div className='d-flex flex-column gap-3'>
            <FloatingLabel
              controlId='floatingInput'
              label='First name'
              className='mb-3'
            >
              <Form.Control type='text' placeholder='John' />
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingInput'
              label='Last name'
              className='mb-3'
            >
              <Form.Control type='text' placeholder='Doe' />
            </FloatingLabel>
            <FloatingLabel
              controlId='floatingInput'
              label='Email address'
              className='mb-3'
            >
              <Form.Control type='email' placeholder='name@example.com' />
            </FloatingLabel>
            <FloatingLabel controlId='floatingPassword' label='Password'>
              <Form.Control type='password' placeholder='Password' />
            </FloatingLabel>
          </div>
          <p>
            Already have an account? <Link to='/'>Login here</Link>
          </p>
          <Button variant='primary' onClick={() => setStep((prev) => prev + 1)}>
            Register
          </Button>
        </div>
      ) : (
        <div className='d-flex flex-column gap-3'>
          <div className='d-flex align-items-center gap-2'>
            <FontAwesomeIcon
              icon={faArrowLeft}
              size='2x'
              onClick={() => setStep((prev) => prev - 1)}
              role='button'
            />
            <h1 className='text-center'>Choose a username</h1>
          </div>
          <FloatingLabel
            controlId='floatingInput'
            label='Username'
            className='mb-3'
          >
            <Form.Control type='text' placeholder='John123' />
          </FloatingLabel>
          <Link to='/dashboard'>
            <Button variant='primary'>Register</Button>
          </Link>
        </div>
      )}
    </Form>
    // <div className='d-flex align-items-center justify-content-center'>
    // </div>
  );
};
