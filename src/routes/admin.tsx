import React from 'react';
import { Form, Tab, Tabs } from 'react-bootstrap';
import { Layout } from '../components/Layout';
import { UserData } from '../components/UserData';
import { useUsers } from '../hooks/useUsers';

export const Admin: React.FC = () => {
  // #TODO #1 Move to <UserData />
  const users = useUsers();

  return (
    <Layout title='Admin' addUser>
      <Tabs defaultActiveKey='users'>
        <Tab title='Users' eventKey='users'>
          <Form className='d-flex flex-column gap-3'>
            {users ? (
              users.map((user) => <UserData key={user.id} user={user} />)
            ) : (
              <h1 className='text-center'>No users found</h1>
            )}
          </Form>
        </Tab>
      </Tabs>
    </Layout>
  );
};
