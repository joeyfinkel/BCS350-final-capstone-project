import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Layout } from '../components/Content';

export const Settings: React.FC = () => {
  return (
    <Layout title='Settings'>
      <p>Change your information here</p>
      <Form className='d-flex flex-column justify-content-around h-100'>
        <Row>
          <Form.Group className='mb-3' controlId='name' as={Col}>
            <Form.Label>Your full name</Form.Label>
            <Form.Control type='text' placeholder='Enter name' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='email' as={Col}>
            <Form.Label>Email address</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className='mb-3' controlId='password' as={Col}>
            <Form.Label>Change password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
          <Form.Group className='mb-3' controlId='changePassword' as={Col}>
            <Form.Label>Confirm password</Form.Label>
            <Form.Control type='password' placeholder='Password' />
          </Form.Group>
        </Row>
        <div className='align-self-end'>
          <Button variant='secondary' type='submit' className='align-self-end'>
            Save changes
          </Button>
        </div>
      </Form>
    </Layout>
  );
};
