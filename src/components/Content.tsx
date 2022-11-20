import React from 'react';
import { NavigationButton } from './NavigationButton';
import { Sidebar } from './Sidebar';
import styles from '../styles/Content.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';

interface Props {
  title: string;
  addUser?: boolean;
  children: React.ReactNode;
}

export const Content: React.FC<Props> = ({ title, children, addUser }) => {
  return (
    <div className='d-flex'>
      <Sidebar
        loggedIn={true}
        contentPosition='start'
        title='Welcome, name'
        titleSize='h2'
        signOut
      >
        <div className='d-flex flex-column justify-content-center flex-grow-1 gap-3'>
          <NavigationButton href='/view-all' text='View All' />
          <NavigationButton href='/settings' text='Settings' />
          <NavigationButton href='/admin' text='Admin' />
        </div>
      </Sidebar>
      <div className={`flex-grow-1 ${styles.wrapper}`}>
        <div className={`p-3 d-flex flex-column ${styles.content}`}>
          <div className='d-flex align-items-center justify-content-start'>
            <h1>{title}</h1>
            {addUser && (
              <FontAwesomeIcon icon={faCirclePlus} size='lg' role='button' />
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
