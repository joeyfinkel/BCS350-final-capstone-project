import React, { useContext, useRef, useState } from 'react';
import { NavigationButton } from './NavigationButton';
import { Sidebar } from './Sidebar';
import styles from '../styles/Content.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlus } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../context/authContext';
import { Link } from 'react-router-dom';
import { greeting } from '../utils/helpers';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { AddUserModal } from './AddUserModal';
import axios from 'axios';

interface Props {
  title: string;
  addUser?: boolean;
  children: React.ReactNode;
}

export const Layout: React.FC<Props> = ({ title, children, addUser }) => {
  const [showModal, setShowModal] = useState(false);
  const { user } = useContext(AuthContext);
  const mainContainer = useRef<HTMLDivElement | null>(null);
  const titleContainerRef = useRef<HTMLDivElement | null>(null);

  if (!user) {
    return (
      <p>
        You are not logged in. Please <Link to='/login'>login</Link>{' '}
      </p>
    );
  }

  return (
    <div className='d-flex'>
      <Sidebar
        contentPosition='start'
        title={greeting(user?.first_name!)}
        titleSize='h3'
        signOut
      >
        <div className='d-flex flex-column justify-content-center flex-grow-1 gap-3'>
          <NavigationButton to='/' text='Data' />
          <NavigationButton to='/settings' text='Settings' />
          <NavigationButton to='/admin' text='Admin' />
        </div>
      </Sidebar>
      <div className={`flex-grow-1 ${styles.wrapper}`}>
        <div
          className={`p-3 d-flex flex-column ${styles.content}`}
          ref={mainContainer}
        >
          <div
            className='d-flex align-items-center justify-content-between'
            ref={titleContainerRef}
          >
            <h1>{title}</h1>
            {addUser && (
              <>
                <OverlayTrigger
                  placement='auto'
                  delay={{ show: 250, hide: 400 }}
                  overlay={<Tooltip>Add user</Tooltip>}
                  container={titleContainerRef}
                >
                  <FontAwesomeIcon
                    size='lg'
                    role='button'
                    icon={faCirclePlus}
                    onClick={() => setShowModal((prev) => !prev)}
                  />
                </OverlayTrigger>
                <AddUserModal
                  show={showModal}
                  onHide={() => {
                    setShowModal(false);
                    axios.get(
                      'http://localhost:80/BCS350/capstone-project/api/index.php'
                    );
                  }}
                  container={mainContainer}
                />
              </>
            )}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};
