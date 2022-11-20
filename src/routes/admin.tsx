import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Form, Tab, Tabs } from 'react-bootstrap';
import { Content } from '../components/Content';
import { UserData } from '../components/UserData';
import { UserInfo } from '../types';

export const Admin: React.FC = () => {
  const [users, setUsers] = useState<UserInfo[] | null>(null);

  useEffect(() => {
    const fetchUsers = () => {
      axios
        .get<string[]>(
          'http://localhost:80/BCS350/capstone-project/api/index.php'
        )
        .then((value) => {
          const data = value.data.map((v) => JSON.parse(v) as UserInfo);

          setUsers(data);
        });
    };

    fetchUsers();
  }, []);

  return (
    <Content title='Admin' addUser>
      <Tabs defaultActiveKey='users'>
        <Tab title='users' eventKey='users'>
          <Form className='d-flex flex-column gap-3'>
            {users?.map((user) => (
              <UserData key={user.id} user={user} />
            ))}
          </Form>
        </Tab>
      </Tabs>
    </Content>
  );
};
