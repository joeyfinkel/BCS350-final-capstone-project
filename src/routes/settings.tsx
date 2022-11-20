import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Content } from '../components/Content';

export const Settings: React.FC = () => {
  return (
    <Content title='Settings'>
      <Form className='d-flex flex-column'>
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
        <Button variant='secondary' type='submit' className='align-self-end'>
          Save changes
        </Button>
      </Form>
    </Content>
  );
};
